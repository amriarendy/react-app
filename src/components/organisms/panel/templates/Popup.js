import { useState } from "react";
import Button from "../../../elements/button/Button";
import ModalDialog from "../../../elements/popup/ModalDialog";

const Popup = () => {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <div className="py-8 bg-white border border-gray-200 rounded-lg shadow-sm px-4 mx-auto max-w-2xl lg:py-4 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h2 className="text-center mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Form
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex justify-center items-center">
            <Button
              id="openDialog"
              type="button"
              onClick={() => setModalType("modalForm")}
              classname="rounded-lg inline-flex items-center px-4 py-2 text-white bg-gray-700 hover:bg-gray-500"
            >
              Open Dialog
            </Button>
          </div>
        </div>
      </div>

      <ModalDialog
        isOpen={modalType === "modalForm"}
        title="Payment Successful"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        onConfirm={() => {
          alert("Confirmed!");
          setModalType(null);
        }}
        onCancel={() => setModalType(null)}
      />
    </>
  );
};

export default Popup;
