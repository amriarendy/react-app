import { useState } from "react";
import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import AddBlog from "../../../organisms/panel/blogs/AddBlog";
import { useNavigate } from "react-router-dom";
import { axiosJWT } from "../../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../../services/api";

const AddBlogView = () => {
  const breadCrumbs = {
    page: "Add Blog",
    data: [
      { page: "Blog", route: "/dashboard/blogs" },
      { page: "Add Blog", route: "/dashboard/blogs/add" },
    ],
  };
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState(null);
  const [publishedAt, setPublishedAt] = useState("");
  // err state
  const [validate, setValidate] = useState({
    description: "",
    body: "",
    title: "",
    category: "",
    thumbnail: "",
    author: "",
    slug: "",
    publishedAt: "",
    position: "",
    country: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("body", body);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);
    formData.append("author", author);
    if (slug) {
      formData.append("slug", slug);
    }
    formData.append("publishedAt", publishedAt);

    try {
      await axiosJWT.post(`${SERVER_API()}/blogs/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard/blogs");
    } catch (error) {
      if (error.response) {
        const errors = error.response.data.errors;
        if (Array.isArray(errors)) {
          let newValidate = {
            description: "",
            body: "",
            title: "",
            category: "",
            thumbnail: "",
            author: "",
            slug: "",
            publishedAt: "",
          };

          errors.forEach((err) => {
            if (newValidate.hasOwnProperty(err.field)) {
              newValidate[err.field] = err.message || "An error occurred";
            }
          });

          setValidate(newValidate);
        } else {
          setErrMessage(error.response.data.message || "An error occurred");
        }
      } else {
        setErrMessage("Network error, please try again later");
      }
    }
  };
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <AddBlog
        props={{
          title,
          setTitle,
          description,
          setDescription,
          body,
          setBody,
          category,
          setCategory,
          thumbnail,
          setThumbnail,
          author,
          setAuthor,
          slug,
          setSlug,
          publishedAt,
          setPublishedAt,
          validate,
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddBlogView;
