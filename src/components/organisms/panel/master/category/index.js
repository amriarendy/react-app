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
    onEdit(editCategory.id, editCategory.category, editSlug.slug, () => {
      setEditCategory({ id: "", category: "", slug: "" });
      toggleModal();
    });
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
              onChange={(e) => setCategory(e.target.value)}
              id={"category"}
              name={"category"}
              label={"category"}
              type={"text"}
              required={true}
            />
            <InputGroup
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              id={"slug"}
              name={"slug"}
              label={"slug"}
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
              onChange={(e) =>
                setEditCategory({ ...editCategory, category: e.target.value })
              }
              id="slug"
              name="slug"
              label="slug"
              type="text"
              required
            />
            <InputGroup
              value={editSlug.slug}
              onChange={(e) =>
                setEditSlug({ ...editSlug, slug: e.target.value })
              }
              id="slug"
              name="slug"
              label="slug"
              type="text"
              required
            />
            {errCategory && (
              <p className="text-red-500 text-sm">{errCategory}</p>
            )}
          </Modal>
        </ModalForm>
      )}
    </>
  );
};

export default Category;
