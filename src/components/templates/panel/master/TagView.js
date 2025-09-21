import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Tag from "../../../organisms/panel/master/tag";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosJWT } from "../../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../../services/api";

const TagView = () => {
  const breadCrumbs = {
    page: "Hashtag",
    data: [
      { page: "Templates", route: "/dashboard/master/tag" },
      { page: "Hashtag", route: "/dashboard/master/tag" },
    ],
  };

  const navigate = useNavigate();

  // state fetch data
  const [data, setData] = useState([]);
  const [editTag, setEditTag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validate, setValidate] = useState("");

  const getData = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/master/tags`);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdd = async (tag, onSuccess) => {
    try {
      await axiosJWT.post(`${SERVER_API()}/master/tags`, { tag });
      setValidate("");
      await getData();
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const tagError = errors.find((err) => err.field === "tag");
        if (tagError) setValidate(tagError.message);
      } else {
        setValidate("An error occurred");
      }
    }
  };

  // update function
  const handleEdit = async (id, tag, onSuccess) => {
    try {
      await axiosJWT.patch(`${SERVER_API()}/master/tags/${id}`, { tag });
      setEditTag({ id: "", tag: "" });
      setValidate("");
      await getData();
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const tagError = errors.find((err) => err.field === "tag");
        if (tagError) setValidate(tagError.message);
      } else {
        setValidate("An error occurred");
      }
    }
  };

  const handleDelete = async (param) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (!confirmDelete) return;
    try {
      await axiosJWT.delete(`${SERVER_API()}/master/tags/${param}`);
      await getData();
    } catch (error) {
      console.log("Error messages:", error);
    }
  };

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Tag
        data={data}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setEditTag={setEditTag}
        editTag={editTag}
        validate={validate}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default TagView;
