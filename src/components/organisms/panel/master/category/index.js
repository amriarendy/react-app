import React, { useState } from "react";
import Table from "../../../../elements/tables/index";
import Thead from "../../../../elements/tables/Thead";
import Tbody from "../../../../elements/tables/Tbody";
import Trow from "../../../../elements/tables/Trow";
import Td from "../../../../elements/tables/Td";
import Th from "../../../../elements/tables/Th";
import Terrors from "../../../../elements/tables/Terrors";
import Modal from "../../../../elements/modal/";
import ModalForm from "../../../../elements/modal/ModalForm";
import InputGroup from "../../../../elements/input";
import Button from "../../../../elements/button/Button";
import { slugFormat } from "../../../../../libs/utils/text";
import InputButton from "../../../../elements/input/InputButton";
import { FaRegEye, FaRegEyeSlash, FaSearch } from "react-icons/fa";

const Category = ({
  data,
  onAdd,
  onEdit,
  onDelete,
  editCategory,
  setEditCategory,
  editSlug,
  setEditSlug,
  errCategory,
  errSlug,
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
      <Table attribute={"null"} toggleModal={() => toggleModal("add")}>
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
      {modalType === "add" && (
        <ModalForm onSubmit={handleAddSubmit}>
          <Modal label={"Create Data"} toggleModal={() => toggleModal()}>
            <InputGroup
              value={category}
              onChange={(e) => {
                const categoryAddSlug = e.target.value;
                setCategory(categoryAddSlug);
                setSlug(slugFormat(categoryAddSlug));
              }}
              id={"category"}
              name={"category"}
              label={"Category"}
              type={"text"}
              required={true}
            />
            <InputGroup
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              id={"slug"}
              name={"slug"}
              label={"Slug"}
              type={"text"}
              required={true}
            />
          </Modal>
        </ModalForm>
      )}

      {modalType === "edit" && (
        <ModalForm onSubmit={handleEditSubmit}>
          <Modal label={"Edit Data"} toggleModal={() => toggleModal()}>
            <InputGroup
              value={editCategory.id}
              id="id"
              name="id"
              type="hidden"
              label="ID"
              disabled
            />
            <InputGroup
              value={editCategory.category}
              onChange={(e) => {
                handleEditChange(e);
                setEditCategory((prev) => ({
                  ...prev,
                  slug: slugFormat(e.target.value),
                }));
              }}
              id="category"
              name="category"
              label="Category"
              type="text"
              required
            />
            <InputButton
              value={editCategory.slug}
              onChange={(e) => {
                const categoryEditSlug = e.target.value;
                setCategory(categoryEditSlug);
                setSlug(slugFormat(categoryEditSlug));
              }}
              id="slug"
              name="slug"
              label="Slug"
              type="text"
              onClick={toggleReadOnly}
              classname={`${
                isReadOnly ? "bg-gray-300 dark:bg-gray-700" : "dark:bg-gray-100"
              }`}
              required
              readonly={isReadOnly ? { readonly: true } : {}}
            >
              {isReadOnly ? (
                <FaRegEyeSlash className="w-4 h-4" />
              ) : (
                <FaRegEye className="w-4 h-4" />
              )}
            </InputButton>
          </Modal>
        </ModalForm>
      )}
    </>
  );
};

export default Category;
