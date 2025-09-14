import React, { useState, useEffect } from "react";
import Table from "../../../elements/tables/index";
import Thead from "../../../elements/tables/Thead";
import Tbody from "../../../elements/tables/Tbody";
import Trow from "../../../elements/tables/Trow";
import Td from "../../../elements/tables/Td";
import Th from "../../../elements/tables/Th";
import Terrors from "../../../elements/tables/Terrors";
import Modal from "../../../elements/modal/";
import ModalForm from "../../../elements/modal/ModalForm";
import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import Image from "../../../elements/image/Image";

const User = ({
  data,
  onAdd,
  onEdit,
  onDelete,
  editTag,
  setEditTag,
  errTag,
}) => {
  const [modalType, setModalType] = useState(null);
  const [tag, setTag] = useState("");
  const toggleModal = (type = null) => setModalType(type);
  const [imageStatus, setImageStatus] = useState({}); // ✅ added

  // simple image checker
  const imageCheck = async (url) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      return res.ok;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          data.map(async (item) => {
            const result = await imageCheck(item.urlPhoto);
            status[item.id] = result;
          })
        );
        setImageStatus(status);
      };
      imageChecks();
    }
  }, [data]);
  const handleAddSubmit = (e) => {
    e.preventDefault();
    onAdd(tag, () => {
      setTag("");
      toggleModal();
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editTag.id, editTag.tag, () => {
      setEditTag({ id: "", tag: "" });
      toggleModal();
    });
  };

  return (
    <>
      <Table attribute={"null"} toggleModal={() => toggleModal("add")}>
        <Thead>
          <Trow>
            <Th classname={"pr-1 sm:pl-6"}>No</Th>
            <Th>Photo</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Phone</Th>
            <Th>Date of Birth</Th>
            <Th>Status</Th>
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
                <Td
                  classname={
                    "font-medium w-24 flex-auto flex items-center justify-center"
                  }
                >
                  <Image
                    src={
                      imageStatus[item.id]
                        ? `${item.urlPhoto}`
                        : "https://placehold.co/150x150?text=Image+Not+Found"
                    }
                    alt={item.name}
                    classname={"rounded-full w-14 h-14"}
                  />
                </Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.name}</Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.gender}</Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.phone}</Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.dob}</Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.status}</Td>
                <Td classname={"font-medium w-32 flex-auto space-x-2"}>
                  <Button
                    id={"btnEdit"}
                    onClick={() => {
                      setEditTag({ id: item.id, tag: item.tag });
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
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              id={"tag"}
              name={"tag"}
              label={"Tag"}
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
              value={editTag.id}
              id="id"
              name="id"
              type="hidden"
              label="ID"
              disabled
            />
            <InputGroup
              value={editTag.tag}
              onChange={(e) => setEditTag({ ...editTag, tag: e.target.value })}
              id="tag"
              name="tag"
              label="Tag"
              type="text"
              required
            />
            {errTag && <p className="text-red-500 text-sm">{errTag}</p>}
          </Modal>
        </ModalForm>
      )}
    </>
  );
};

export default User;
