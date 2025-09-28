import { useState } from "react";
import Button from "../../../elements/button/Button";
import CardGroup from "../../../elements/card/Card";
import InputGroup from "../../../elements/input";
import ModalForm from "../../../elements/modal/ModalForm";
import Modal from "../../../elements/modal";

const ModalExample = () => {
  const [modalType, setModalType] = useState(null);
  const toggleModal = (type = null) => setModalType(type);

  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
        <CardGroup header="Modal Form">
          <Button
            id="btnModalForm"
            type="button"
            onClick={() => toggleModal("modalForm")}
            classname="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Open Input Modal
          </Button>
        </CardGroup>
        <CardGroup header="Modal Read">
          <Button
            id="btnModalRead"
            type="button"
            onClick={() => toggleModal("modalRead")}
            classname="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Open Read Modal
          </Button>
        </CardGroup>
      </div>

      {modalType === "modalForm" && (
        <ModalForm>
          <Modal label={"Input Modal"} toggleModal={() => toggleModal()}>
            <InputGroup
              id="input"
              name="input"
              label="Input"
              type="text"
              required
            />
          </Modal>
        </ModalForm>
      )}

      {modalType === "modalRead" && (
        <Modal label={"Read Modal"} toggleModal={() => toggleModal()}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Modal>
      )}
    </>
  );
};

export default ModalExample;
