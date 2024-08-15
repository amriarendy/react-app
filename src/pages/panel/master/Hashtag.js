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
import useFetch from "../../../hooks/useFetch";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { store } from "../../../services/routeService";
import { Input } from "../../../components/ui/Input";
import axios from "axios";
import Loading from "../../../components/errors/Loading";
import Errors from "../../../components/errors/Errors";

const Hashtag = () => {
  const breadCrumbs = {
    page: "Hashtag",
    data: [
      { page: "Master", route: "/master/hashtag" },
      { page: "Hashtag", route: "/master/hashtag" },
      { page: "List", route: "/master/hashtag" },
    ],
  };
  const navigate = useNavigate();

  const [tag, setTag] = useState("");
  const [editTag, setEditTag] = useState({ id: "", tag: "" });

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
      const response = await axios.get("http://localhost:3001/master/tags");
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
      await axios.post("http://localhost:3001/master/tags", { tag });
      setTag(""); // Reset input field
      toggleAddModal(); // Close modal
      getTags(); // Refresh data
    } catch (error) {
      console.error("Error adding tag", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/master/tags/${editTag.id}`, {
        tag: editTag.tag,
      });
      setEditTag({ id: "", tag: "" }); // Reset input fields
      toggleEditModal(); // Close modal
      getTags(); // Refresh data
    } catch (error) {
      console.error("Error updating tag", error);
    }
  };

  const handleAddChange = (e) => {
    setTag(e.target.value);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTag((prev) => ({ ...prev, [name]: value }));
  };

  const destroy = async (param) => {
    try {
      await axios.delete(`http://localhost:3001/master/tags/${param}`);
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
                          toggleModal={toggleEditModal}
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
                      onChange={handleAddChange}
                      id={"tag"}
                      name={"tag"}
                      type={"text"}
                      label={"Tag"}
                      required={true}
                    />
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
                    required={true}
                  />
                  <div className="sm:col-span-2">
                    <Input
                      value={editTag.tag}
                      onChange={handleEditChange}
                      id={"tag"}
                      name={"tag"}
                      type={"text"}
                      label={"Tag"}
                      required={true}
                    />
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

export default Hashtag;
