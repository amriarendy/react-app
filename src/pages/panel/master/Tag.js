import React, { useState, useEffect } from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/molecules/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/organisms/table/advance/AttributeTable";
import Table from "../../../components/organisms/table/advance/Table";
import Thead from "../../../components/organisms/table/advance/Thead";
import Tfoot from "../../../components/organisms/table/advance/Tfoot";
import Taction from "../../../components/organisms/table/advance/Taction";
import HASHTAG_FORMAT_TABLE from "../../../libs/constants/formats/TagFormat";
import Modal from "../../../components/molecules/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/atoms/Input";
import Loading from "../../../components/molecules/errors/Loading";
import Errors from "../../../components/molecules/errors/Errors";
import { axiosJWT } from "../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../services/api";

const Tag = () => {
  const breadCrumbs = {
    page: "Tag",
    data: [
      { page: "Master", route: "/dashboard/master/tag" },
      { page: "Tag", route: "/dashboard/master/tag" },
      { page: "List", route: "/dashboard/master/tag" },
    ],
  };

  const navigate = useNavigate();

  const [tag, setTag] = useState("");
  const [editTag, setEditTag] = useState({ id: "", tag: "" });
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  // err state
  const [errTag, setErrTag] = useState("");
  const [errMessage, setErrMessage] = useState("");

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
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTags = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/master/tags`);
      setTags(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosJWT.post(`${SERVER_API()}/master/tags`, { tag });
      setTag(""); // Reset input field
      setErrTag("");
      toggleAddModal(); // Close modal
      getTags(); // Refresh data
    } catch (error) {
      console.log("Error: ", error.response.data.errors);
      if (error.response) {
        const errors = error.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((err) => {
            if (err.field === "tag") {
              setErrTag(err.message || "An error occurred");
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

  // update function
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosJWT.patch(`${SERVER_API()}/master/tags/${editTag.id}`, {
        tag: editTag.tag,
      });
      setEditTag({ id: "", tag: "" }); // Reset input fields
      setErrTag("");
      toggleEditModal(); // Close modal
      getTags(); // Refresh data
    } catch (error) {
      console.log("Error: ", error.response.data.errors);
      if (error.response) {
        const errors = error.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((err) => {
            if (err.field === "tag") {
              setErrTag(err.message || "An error occurred");
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

  const handleEditClick = (tag) => {
    setEditTag({ id: tag.id, tag: tag.tag });
    toggleEditModal(); // Open the modal
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTag((prev) => ({ ...prev, [name]: value }));
  };

  // delete function
  const destroy = async (param) => {
    try {
      await axiosJWT.delete(`${SERVER_API()}/master/tags/${param}`);
      getTags();
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
                attribute={HASHTAG_FORMAT_TABLE.attribute}
                toggleModal={toggleAddModal}
              />
              <Table>
                <Thead
                  thead={HASHTAG_FORMAT_TABLE.th}
                  attribute={HASHTAG_FORMAT_TABLE.attribute}
                />
                <tbody>
                  {tags.length > 0 ? (
                    tags.map((item, index) => (
                      <tr
                        key={item.id}
                        className="border-b dark:border-gray-700"
                      >
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{item.tag}</td>
                        <Taction
                          index={index}
                          taction={item}
                          toggleModal={() => handleEditClick(item)}
                          destroy={destroy}
                          attribute={HASHTAG_FORMAT_TABLE.attribute}
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
                header={"Add Tag"}
                toggleModal={toggleAddModal}
                onSubmit={handleAddSubmit}
              >
                {" "}
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Input
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      id={"tag"}
                      name={"tag"}
                      type={"text"}
                      label={"Tag"}
                      required={false}
                    />
                    {errTag && (
                      <p className="font-semibold text-red-500 text-sm">
                        {errTag}
                      </p>
                    )}
                  </div>
                </div>
              </Modal>
            )}
            {isEditModalOpen && (
              <Modal
                header={"Edit Tag"}
                toggleModal={toggleEditModal}
                onSubmit={handleEditSubmit}
              >
                {" "}
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <Input
                    value={editTag.id}
                    onChange={handleEditChange}
                    id={"id"}
                    name={"id"}
                    type={"hidden"}
                    label={"ID"}
                    required={false}
                  />
                  <div className="sm:col-span-2">
                    <Input
                      value={editTag.tag}
                      onChange={handleEditChange}
                      id={"tag"}
                      name={"tag"}
                      type={"text"}
                      label={"Tag"}
                      required={false}
                    />
                    {errTag && (
                      <p className="font-semibold text-red-500 text-sm">
                        {errTag}
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

export default Tag;
