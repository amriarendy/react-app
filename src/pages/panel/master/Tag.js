import React, { useState, useEffect } from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/table/default/AttributeTable";
import Table from "../../../components/table/default/Table";
import Thead from "../../../components/table/default/Thead";
import Tfoot from "../../../components/table/default/Tfoot";
import Taction from "../../../components/table/default/Taction";
import HASHTAG_FORMAT_TABLE from "../../../libs/constants/formats/TagFormat";
import Modal from "../../../components/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/ui/Input";
import axios from "axios";
import Loading from "../../../components/errors/Loading";
import Errors from "../../../components/errors/Errors";
import { axiosJWT, setTokenAndExpire } from "../../../libs/utils/axiosJwt";
import { getData } from "../../../services/axiosService";

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
  const [validate, setValidate] = useState("");
  const [editValidate, setEditValidate] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

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
      // const response = await axiosJWT.get("http://localhost:3001/master/tags", {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const response = await getData("/master/tags");
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
    if (!tag.trim()) {
      setValidate("Tag is required.");
      return;
    }
    if (tag.length > 50) {
      setValidate("Tag must be less than 50 characters.");
      return;
    }
    try {
      await axios.post(
        "http://localhost:3001/master/tags",
        { tag },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTag(""); // Reset input field
      toggleAddModal(); // Close modal
      getTags(); // Refresh data
    } catch (error) {
      console.error("Error adding tag", error);
    }
  };

  // update function
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editTag.tag.trim()) {
      setEditValidate("Tag is required.");
      return;
    }
    if (editTag.tag.length > 50) {
      setEditValidate("Tag must be less than 50 characters.");
      return;
    }
    try {
      await axiosJWT.patch(
        `http://localhost:3001/master/tags/${editTag.id}`,
        {
          tag: editTag.tag,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditTag({ id: "", tag: "" }); // Reset input fields
      toggleEditModal(); // Close modal
      getTags(); // Refresh data
    } catch (error) {
      console.error("Error updating tag", error);
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
      await axiosJWT.delete(`http://localhost:3001/master/tags/${param}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
                    {validate && (
                      <p className="font-semibold text-red-500 text-sm">
                        {validate}
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
                    {editValidate && (
                      <p className="font-semibold text-red-500 text-sm">
                        {editValidate}
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
