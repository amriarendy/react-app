import React, { useEffect, useState } from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/organisms/table/default/AttributeTable";
import Table from "../../../components/organisms/table/default/Table";
import Thead from "../../../components/organisms/table/default/Thead";
import Tfoot from "../../../components/organisms/table/default/Tfoot";
import Taction from "../../../components/organisms/table/default/Taction";
import CATEGORY_FORMAT_TABLE from "../../../libs/constants/formats/CategoryFormat";
import Modal from "../../../components/molecules/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Input, InputButton } from "../../../components/atoms/Input";
import { FaCodeBranch, FaRegEye } from "react-icons/fa";
import { axiosJWT } from "../../../libs/utils/axiosJwt";
import Loading from "../../../components/molecules/errors/Loading";
import Errors from "../../../components/molecules/errors/Errors";
import { slugFormat } from "../../../libs/utils/text";
import { SERVER_API } from "../../../services/api";

const Category = () => {
  const breadCrumbs = {
    page: "Category",
    data: [
      { page: "Master", route: "/dashboard/master/category" },
      { page: "Category", route: "/dashboard/master/category" },
      { page: "List", route: "/dashboard/master/category" },
    ],
  };
  const navigate = useNavigate();

  // state values
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [editCategory, setEditCategory] = useState({
    id: "",
    category: "",
    slug: "",
  });
  // err state
  const [errCategory, setErrCategory] = useState("");
  const [errSlug, setErrSlug] = useState("");
  const [errMessage, setErrMessage] = useState("");

  // state modal add, edit open & close
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDelayOver, setIsDelayOver] = useState(true);
  const [addValidate, setAddValidate] = useState("");
  const [editValidate, setEditValidate] = useState("");

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  // state fetch data
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategories = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/master/categories`);
      setCategories(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // craete function
  const handleAddSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosJWT.post(`${SERVER_API()}/master/categories`, {
        category,
        slug,
      });
      setCategory("");
      setSlug(""); // Reset input field
      setErrCategory("");
      setErrSlug("");
      toggleAddModal(); // Close modal
      getCategories(); // Refresh data
    } catch (error) {
      console.log("Error: ", error.response.data.errors);
      if (error.response) {
        const errors = error.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((err) => {
            if (err.field === "category") {
              setErrCategory(err.message || "An error occurred");
            } else if (err.field === "slug") {
              setErrSlug(err.message || "An error occurred");
            }
          });
        } else {
          setErrMessage(error.response.data.message || "An error occurred");
        }
      } else {
        setErrMessage("Network error, please try again later");
      }
    } finally {
      // Delay for 5000ms before setting isSubmitting to false
      setTimeout(() => {
        setIsSubmitting(false);
        setIsDelayOver(true); // Indicate that delay is over
      }, 500000);
    }
  };

  // update function
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosJWT.patch(
        `${SERVER_API()}/master/categories/${editCategory.id}`,
        {
          category: editCategory.category,
          slug: editCategory.slug,
        }
      );
      setEditCategory({ id: "", category: "", slug: "" }); // Reset input fields
      setErrCategory("");
      setErrSlug("");
      toggleEditModal(); // Close modal
      getCategories(); // Refresh data
    } catch (error) {
      console.log("Error: ", error.response.data.errors);
      if (error.response) {
        const errors = error.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((err) => {
            if (err.field === "category") {
              setErrCategory(err.message || "An error occurred");
            } else if (err.field === "slug") {
              setErrSlug(err.message || "An error occurred");
            }
          });
        } else {
          setErrMessage(error.response.data.message || "An error occurred");
        }
      } else {
        setErrMessage("Network error, please try again later");
      }
    }
  };

  const handleEditClick = (category) => {
    setEditCategory({
      id: category.id,
      category: category.category,
      slug: category.slug,
    });
    toggleEditModal(); // Open the modal
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCategory((prev) => ({ ...prev, [name]: value }));
  };

  // delete data
  const destroy = async (param) => {
    try {
      await axiosJWT.delete(`${SERVER_API()}/master/categories/${param}`);
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        {loading ? (
          <div className="flex items-center inset-0 sm:h-full">
            <Loading />
          </div>
        ) : error ? (
          <div className="flex items-center inset-0 sm:h-full">
            <Errors code={500} status={error.code} message={error.message} />
          </div>
        ) : (
          <div className="mx-auto max-w-screen-xl mb-4 px-4 lg:px-12">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <AttributeTable
                attribute={CATEGORY_FORMAT_TABLE.attribute}
                toggleModal={toggleAddModal}
              />
              <Table>
                <Thead
                  thead={CATEGORY_FORMAT_TABLE.th}
                  attribute={CATEGORY_FORMAT_TABLE.attribute}
                />
                <tbody>
                  {categories.length > 0 ? (
                    categories.map((item, index) => (
                      <tr
                        key={item.id}
                        className="border-b dark:border-gray-700"
                      >
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{item.category}</td>
                        <td className="px-4 py-3">{item.slug}</td>
                        <Taction
                          index={index}
                          taction={item}
                          toggleModal={() => handleEditClick(item)}
                          destroy={destroy}
                          attribute={CATEGORY_FORMAT_TABLE.attribute}
                        />
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-4 py-3 text-center">
                        Data Not Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
              <Tfoot />
            </div>

            {/* Modal */}
            {isAddModalOpen && (
              <Modal
                header={"Add Category"}
                toggleModal={toggleAddModal}
                onSubmit={handleAddSubmit}
              >
                {isSubmitting ? (
                  <Loading />
                ) : (
                  <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Input
                        value={category}
                        onChange={(e) => {
                          const categoryAddSlug = e.target.value;
                          setCategory(categoryAddSlug);
                          setSlug(slugFormat(categoryAddSlug));
                        }}
                        id={"category"}
                        name={"category"}
                        type={"text"}
                        label={"Category"}
                        required={false}
                      />
                      {errCategory && (
                        <p className="font-semibold text-red-500 text-sm">
                          {errCategory}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <InputButton
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        id={"slug"}
                        name={"slug"}
                        type={"text"}
                        label={"Slug"}
                        icon={
                          <FaCodeBranch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        }
                        readonly={true}
                        required={false}
                      />
                      {errSlug && (
                        <p className="font-semibold text-red-500 text-sm">
                          {errSlug}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </Modal>
            )}
            {isEditModalOpen && (
              <Modal
                header={"Edit Category"}
                toggleModal={toggleEditModal}
                onSubmit={handleEditSubmit}
              >
                {" "}
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <Input
                    value={editCategory.id}
                    onChange={handleEditChange}
                    id={"id"}
                    name={"id"}
                    type={"hidden"}
                    label={"ID"}
                    required={false}
                  />
                  <div className="sm:col-span-2">
                    <Input
                      value={editCategory.category}
                      onChange={(e) => {
                        handleEditChange(e);
                        setEditCategory((prev) => ({
                          ...prev,
                          slug: slugFormat(e.target.value),
                        }));
                      }}
                      id={"category"}
                      name={"category"}
                      type={"text"}
                      label={"Category"}
                      required={false}
                    />
                    {errCategory && (
                      <p className="font-semibold text-red-500 text-sm">
                        {errCategory}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <InputButton
                      value={editCategory.slug}
                      onChange={handleEditChange}
                      id={"slug"}
                      name={"slug"}
                      type={"text"}
                      label={"Slug"}
                      icon={
                        <FaCodeBranch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      }
                      readonly={true}
                      required={false}
                    />
                    {errSlug && (
                      <p className="font-semibold text-red-500 text-sm">
                        {errSlug}
                      </p>
                    )}
                  </div>
                </div>
              </Modal>
            )}
          </div>
        )}
      </PanelLayout>
    </>
  );
};

export default Category;
