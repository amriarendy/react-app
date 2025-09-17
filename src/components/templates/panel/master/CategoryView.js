import Breadcrumbs from "../../../molecules/breadcrumbs/Breadcrumbs";
import Category from "../../../organisms/panel/master/category";
import { useNavigate } from "react-router-dom";
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
  const [errCategory, setErrCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validate, setvalidate] = useState("");

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
      setErrCategory("");
      await getData();
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const categoryError = errors.find((err) => err.field === "category");
        if (categoryError) setErrCategory(categoryError.message);
      } else {
        setErrCategory("An error occurred");
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
      setEditCategory({ id: "", category: "", slug: "" }); // Reset input fields
      setErrCategory("");
      await getData();
      if (onSuccess) onSuccess();
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const categoryError = errors.find((err) => err.field === "category");
        if (categoryError) setErrCategory(categoryError.message);
      } else {
        setErrCategory("An error occurred");
      }
    }
  };

  const handleDelete = async (param) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
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
        errCategory={errCategory}
        validate={validate}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default CategoryView;
