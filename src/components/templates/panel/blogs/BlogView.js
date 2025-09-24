import Breadcrumbs from "../../../elements/breadcrumbs/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosJWT } from "../../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../../services/api";
import Blog from "../../../organisms/panel/blogs/Blog";

const BlogView = () => {
  const breadCrumbs = {
    page: "Blog",
    data: [
      { page: "Blogs", route: "/dashboard/blog" },
      { page: "List", route: "/dashboard/blog" },
    ],
  };

  const navigate = useNavigate();

  // state fetch data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errTag, setErrTag] = useState("");
  const [editTag, setEditTag] = useState("");

  const getData = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/blogs`);
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
      await axiosJWT.post(`${SERVER_API()}/blogs`, { tag });
      setErrTag("");
      await getData(); // refresh data
      if (onSuccess) onSuccess(); // misalnya untuk close modal
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const tagError = errors.find((err) => err.field === "tag");
        if (tagError) setErrTag(tagError.message);
      } else {
        setErrTag("An error occurred");
      }
    }
  };

  // update function
  const handleEdit = async (id, tag, onSuccess) => {
    try {
      await axiosJWT.patch(`${SERVER_API()}/blogs${id}`, { tag });
      setEditTag({ id: "", tag: "" }); // Reset input fields
      setErrTag("");
      await getData(); // Refresh data
      if (onSuccess) onSuccess(); // close modal dari child
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const tagError = errors.find((err) => err.field === "tag");
        if (tagError) setErrTag(tagError.message);
      } else {
        setErrTag("An error occurred");
      }
    }
  };

  const handleDelete = async (param) => {
    const confirmDelete = window.confirm("Are you sure delete this data?");
    if (!confirmDelete) return;
    try {
      await axiosJWT.delete(`${SERVER_API()}/blogs/${param}`);
      await getData();
    } catch (error) {
      console.log("Error messages:", error);
    }
  };

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Blog
        data={data}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setEditTag={setEditTag}
        editTag={editTag}
        errTag={errTag}
      />
    </>
  );
};

export default BlogView;
