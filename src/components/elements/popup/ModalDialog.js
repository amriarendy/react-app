import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "../button/Button";

export const ModalDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
}) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 200); // sesuai duration-200
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity ${
          isOpen
            ? "opacity-100 ease-out duration-300"
            : "opacity-0 ease-in duration-200"
        }`}
      ></div>

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-200">
          <FaCheck className="h-6 w-6 text-green-600" />
        </div>

        <div className="mt-3 text-center sm:mt-5">
          <h3
            className="text-base font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            {title}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
          <Button
            id="confirmBtn"
            route="button"
            onClick={onConfirm}
            classname="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:col-start-2"
          >
            OK
          </Button>
          <Button
            id="cancelBtn"
            route="button"
            onClick={onCancel}
            classname="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:col-start-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
