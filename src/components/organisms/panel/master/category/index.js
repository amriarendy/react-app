import React, { useState } from "react";
import Table from "../../../../elements/tables/index";
import Thead from "../../../../elements/tables/Thead";
import Tbody from "../../../../elements/tables/Tbody";
import Trow from "../../../../elements/tables/Trow";
import Td from "../../../../elements/tables/Td";
import Th from "../../../../elements/tables/Th";
import Terrors from "../../../../elements/tables/Terrors";
import Button from "../../../../elements/button/Button";
import { slugFormat } from "../../../../../libs/utils/text";
import Loading from "../../../../elements/skeleton/Loading";
import Errors from "../../../../elements/errors/Errors";
import CategoryAdd from "./CategoryAdd";
import CategoryEdit from "./CategoryEdit";

const Category = ({
  data,
  onAdd,
  onEdit,
  onDelete,
  editCategory,
  setEditCategory,
  loading,
  error,
  validate,
}) => {
  const [modalType, setModalType] = useState(null);
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const toggleModal = (type = null) => setModalType(type);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    onAdd(category, slug, () => {
      setCategory("");
      toggleModal();
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editCategory.id, editCategory.category, editCategory.slug, () => {
      setEditCategory({ id: "", category: "", slug: "" });
      toggleModal();
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCategory((prev) => ({ ...prev, [name]: value }));
  };
  const [isReadOnly, setReadOnly] = useState(true);

  const toggleReadOnly = () => {
    setReadOnly(!isReadOnly);
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center inset-0 sm:h-full">
          <Loading />
        </div>
      ) : error ? (
        <div className="flex items-center inset-0 sm:h-full">
          <Errors code={500} status={error.code} message={error.message} />
        </div>
      ) : (
        <Table attribute={() => toggleModal("add")}>
          <Thead>
            <Trow>
              <Th classname={"pr-1 sm:pl-6"}>No</Th>
              <Th>Category</Th>
              <Th>Slug</Th>
              <Th>Action</Th>
            </Trow>
          </Thead>
          <Tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <Trow classname={"border-b"} key={item.index}>
                  <Td classname={"text-center font-medium w-14 flex-none"}>
                    {index + 1}
                  </Td>
                  <Td classname={"font-medium w-64 flex-auto"}>
                    {item.category}
                  </Td>
                  <Td classname={"font-medium w-64 flex-auto"}>{item.slug}</Td>
                  <Td classname={"font-medium w-32 flex-auto space-x-2"}>
                    <Button
                      id={"btnEdit"}
                      onClick={() => {
                        setEditCategory({
                          id: item.id,
                          category: item.category,
                          slug: item.slug,
                        });
                        toggleModal("edit");
                      }}
                      classname={
                        "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-yellow-400 hover:bg-yellow-500"
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      id={"btnDelete"}
                      route={"button"}
                      onClick={() => onDelete(item.id)}
                      classname={
                        "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-red-700 hover:bg-red-500"
                      }
                    >
                      Delete
                    </Button>
                  </Td>
                </Trow>
              ))
            ) : (
              <Trow>
                <Terrors colSpan={4}>Data Not Found!</Terrors>
              </Trow>
            )}
          </Tbody>
        </Table>
      )}
      {modalType === "add" && (
        <CategoryAdd
          props={{ validate, category, slug, setCategory, setSlug, slugFormat }}
          onSubmit={handleAddSubmit}
          toggleModal={toggleModal}
        />
      )}

      {modalType === "edit" && (
        <CategoryEdit
          props={{
            validate,
            category,
            editCategory,
            setEditCategory,
            isReadOnly,
            toggleReadOnly,
            setCategory,
            handleEditChange,
            slugFormat,
          }}
          onSubmit={handleEditSubmit}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Category;
