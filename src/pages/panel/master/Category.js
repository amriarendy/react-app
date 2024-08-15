import React, { useEffect, useState } from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/table/default/AttributeTable";
import Table from "../../../components/table/default/Table";
import Thead from "../../../components/table/default/Thead";
import Tfoot from "../../../components/table/default/Tfoot";
import Taction from "../../../components/table/default/Taction";
import CATEGORY_FORMAT_TABLE from "../../../libs/constants/formats/CategoryFormat";
import Modal from "../../../components/modal/Modal";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { store } from "../../../services/routeService";
import { Input, InputButton } from "../../../components/ui/Input";
import { FaCodeBranch, FaRegEye } from "react-icons/fa";
import axios from "axios";

const Category = () => {
  const breadCrumbs = {
    page: "Category",
    data: [
      { page: "Master", route: "/master/category" },
      { page: "Category", route: "/master/category" },
      { page: "List", route: "/master/category" },
    ],
  };
  const navigate = useNavigate();

  // state values
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");

  // state modal add, edit open & close
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
      const response = await axios.get(
        "http://localhost:3001/master/categories"
      );
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

  // create data
  const { values, handleChange, setValues } = useForm(
    {
      tag: "",
    },
    handleSubmit
  );

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const ContentType = "application/json";
      await store("/master/categories", ContentType, values);
      navigate("/master/hashtag");
    } catch (error) {
      console.error(error);
    }
  }

  // delete data
  const destroy = async (param) => {
    try {
      await axios.delete(`http://localhost:3001/master/categories/${param}`);
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
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
                    <tr key={item.id} className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3">{item.slug}</td>
                      <Taction
                        index={index}
                        taction={item}
                        toggleModal={toggleEditModal}
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
              onSubmit={handleSubmit}
            >
              {" "}
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Input
                    value={values.category}
                    onChange={handleChange}
                    id={"category"}
                    name={"category"}
                    type={"text"}
                    label={"Category"}
                    required={true}
                  />
                </div>

                <div className="sm:col-span-2">
                  <InputButton
                    value={values.slug}
                    onChange={handleChange}
                    id={"slug"}
                    name={"slug"}
                    type={"text"}
                    label={"Slug"}
                    icon={
                      <FaCodeBranch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    }
                    buttonIcon={<FaRegEye className="w-4 h-4" />}
                    placeholder={"Search Everything:"}
                    required={true}
                  />
                </div>
              </div>
            </Modal>
          )}
          {isEditModalOpen && (
            <Modal
              header={"Edit Category"}
              toggleModal={toggleEditModal}
              onSubmit={handleSubmit}
            >
              {" "}
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <Input
                  value={values.id}
                  onChange={handleChange}
                  id={"id"}
                  name={"id"}
                  type={"hidden"}
                  label={"ID"}
                  required={true}
                />
                <div className="sm:col-span-2">
                  <Input
                    value={values.category}
                    onChange={handleChange}
                    id={"category"}
                    name={"category"}
                    type={"text"}
                    label={"Category"}
                    required={true}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    value={values.slug}
                    onChange={handleChange}
                    id={"slug"}
                    name={"slug"}
                    type={"text"}
                    label={"Slug"}
                    required={true}
                  />
                </div>
              </div>
            </Modal>
          )}
        </div>
      </PanelLayout>
    </>
  );
};

export default Category;
