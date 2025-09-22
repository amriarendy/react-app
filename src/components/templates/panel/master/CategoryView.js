import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Category from "../../../organisms/panel/master/category";
import { useEffect, useState } from "react";
import { axiosJWT } from "../../../../libs/utils/axiosJwt";
import { SERVER_API } from "../../../../services/api";

const CategoryView = () => {
  const breadCrumbs = {
    page: "Category",
    data: [
      { page: "Templates", route: "/dashboard/master/category" },
      { page: "Category", route: "/dashboard/master/category" },
    ],
  };

  // state fetch data
  const [data, setData] = useState([]);
  const [editCategory, setEditCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validate, setValidate] = useState({ category: "", slug: "" });

  const getData = async () => {
    try {
      const response = await axiosJWT.get(`${SERVER_API()}/master/categories`);
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

  const handleAdd = async (category, slug, onSuccess) => {
    try {
      await axiosJWT.post(`${SERVER_API()}/master/categories`, {
        category,
        slug,
      });
      setValidate({ category: "", slug: "" });
      await getData();
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        let newValidate = { category: "", slug: "" };

        const categoryError = errors.find((err) => err.field === "category");
        const slugError = errors.find((err) => err.field === "slug");

        if (categoryError) newValidate.category = categoryError.message;
        if (slugError) newValidate.slug = slugError.message;

        setValidate(newValidate);
      } else {
        setValidate({ category: "An error occurred", slug: "" });
      }
    }
  };

  // update function
  const handleEdit = async (id, category, slug, onSuccess) => {
    try {
      await axiosJWT.patch(`${SERVER_API()}/master/categories/${id}`, {
        category,
        slug,
      });
      setEditCategory({ id: "", category: "", slug: "" });
      setValidate({ category: "", slug: "" });
      await getData();
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        let newValidate = { category: "", slug: "" };

        const categoryError = errors.find((err) => err.field === "category");
        const slugError = errors.find((err) => err.field === "slug");

        if (categoryError) newValidate.category = categoryError.message;
        if (slugError) newValidate.slug = slugError.message;

        setValidate(newValidate);
      } else {
        setValidate({ category: "An error occurred", slug: "" });
      }
    }
  };

  const handleDelete = async (param) => {
    const confirmDelete = window.confirm("Are you sure delete this data?");
    if (!confirmDelete) return;
    try {
      await axiosJWT.delete(`${SERVER_API()}/master/categories/${param}`);
      await getData();
    } catch (error) {
      console.log("Error messages:", error);
    }
  };

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Category
        data={data}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setEditCategory={setEditCategory}
        editCategory={editCategory}
        validate={validate}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default CategoryView;
