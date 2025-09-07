import React, { useState } from "react";
import Table from "../../../elements/tables";
import Thead from "../../../elements/tables/Thead";
import Tbody from "../../../elements/tables/Tbody";
import Trow from "../../../elements/tables/Trow";
import Td from "../../../elements/tables/Td";
import Th from "../../../elements/tables/Th";
import Taction from "../../../elements/tables/Taction";
import Terrors from "../../../elements/tables/Terrors";
import Modal from "../../../elements/modal/";
import ModalForm from "../../../elements/modal/ModalForm";
import InputGroup from "../../../elements/input";
import Button from "../../../elements/button/Button";
import Href from "../../../elements/href/Href";

const Test = ({ data }) => {
  const [modalType, setModalType] = useState(null);
  const toggleModal = (type = null) => setModalType(type);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isReadModalOpen, setIsReadModalOpen] = useState(false);

  // const toggleAddModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  // const toggleDetailModal = () => {
  //   setIsReadModalOpen(!isReadModalOpen);
  // };
  // const toggleDeleteModal = () => {
  //   setIsReadModalOpen(!isReadModalOpen);
  // };

  return (
    <>
      <Table attribute={"null"} toggleModal={() => toggleModal("add")}>
        <Thead>
          <Trow>
            <Th classname={"pr-1 sm:pl-6"}>No</Th>
            <Th>Product</Th>
            <Th>Category</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Trow>
        </Thead>
        <Tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <Trow classname={"border-b"} key={item.index}>
                <Td classname={"pl-4 pr-1 font-medium sm:pl-6"}>{index + 1}</Td>
                <Td>{item.product}</Td>
                <Td>{item.category}</Td>
                <Td>{item.technology}</Td>
                <Td>${item.price}</Td>
                <Td classname={"space-x-2"}>
                  <Button
                    id={"btnDetailProduct"}
                    type={"button"}
                    onClick={() => toggleModal("detail")}
                    classname={
                      "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-teal-700 hover:bg-indigo-500"
                    }
                  >
                    Detail
                  </Button>
                  <Href
                    id={"btnEditProduct"}
                    route={"/dashboard/templates/form/"}
                    classname={
                      "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-yellow-400 hover:bg-yellow-500"
                    }
                  >
                    Edit
                  </Href>
                  <Button
                    id={"btnDeleteProduct"}
                    route={"button"}
                    onClick={() => toggleModal("delete")}
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
              <Terrors colSpan={7}>Data Not Found</Terrors>
            </Trow>
          )}
        </Tbody>
      </Table>
      {modalType === "add" && (
        // <ModalTest />
        <Modal label={"Create Data"} toggleModal={() => toggleModal()}>
          <ModalForm onSubmit={"Testing"}>
            <InputGroup
              id={"product"}
              name={"product"}
              label={"Product"}
              type={"text"}
              required={true}
            />
            <InputGroup
              id={"category"}
              name={"category"}
              label={"Category"}
              type={"text"}
              required={true}
            />
            <InputGroup
              id={"brand"}
              name={"brand"}
              label={"Brand"}
              type={"text"}
              required={true}
            />
            <InputGroup
              id={"price"}
              name={"price"}
              label={"Price"}
              type={"number"}
              required={true}
            />
          </ModalForm>
        </Modal>
      )}

      {modalType === "detail" && (
        // <ModalTest />
        <Modal label={"Create Data"} toggleModal={() => toggleModal()}>
          What is Lorem Ipsum?. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Modal>
      )}
    </>
  );
};

export default Test;
