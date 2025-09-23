import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import EditBlog from "../../../organisms/panel/blogs/EditBlog";
import { axiosJWT } from "../../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditBlogView = () => {
  const breadCrumbs = {
    page: "Edit Blog",
    data: [
      { page: "Blog", route: "/dashboard/blogs" },
      { page: "Edit Blog", route: "/dashboard/blogs/edit" },
    ],
  };

  const navigate = useNavigate();
  const { param } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState(null);
  const [publishedAt, setPublishedAt] = useState("");
  // err state
  const [errMessage, setErrMessage] = useState("");
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

  useEffect(() => {
    getWhere();
  }, []);

  const getWhere = async () => {
    const response = await axiosJWT.get(`${SERVER_API()}/blogs/${param}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setBody(response.data.body);
    setCategory(response.data.category);
    setThumbnail(response.data.thumbnail);
    setAuthor(response.data.author);
    setSlug(response.data.slug);
    setPublishedAt(response.data.publishedAt);
  };

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
      await axiosJWT.patch(`${SERVER_API()}/blogs/${param}`, formData, {
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
      <EditBlog
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

export default EditBlogView;
