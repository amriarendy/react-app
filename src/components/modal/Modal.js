import { IoMdClose } from "react-icons/io";
import { Button, ButtonIcon } from "../ui/Button";
import { FaSave } from "react-icons/fa";

const Modal = ({ children, header, onSubmit, toggleModal }) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        aria-hidden="true"
        className={`fixed left-0 right-0 z-50 ${
          toggleModal ? "flex" : ""
        } items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full ${
          toggleModal ? "block" : "hidden"
        }`}
      >
        {" "}
        {/* Dark background */}
        <div
          className={`fixed inset-0 bg-black opacity-50 ${
            toggleModal ? "block" : "hidden"
          }`}
          // onClick={toggleModal}
        ></div>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {header}
              </h3>
              <ButtonIcon color={"red"} onClick={toggleModal} type="button">
                <IoMdClose className="w-5 h-5" fill="currentColor" />
              </ButtonIcon>
            </div>

            <form onSubmit={onSubmit}>
              {children}{" "}
              <Button
                id={"btnSave"}
                type={"submit"}
                label={"Submit"}
                color={"blue"}
                icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
