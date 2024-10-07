import { ButtonIcon } from "../ui/Button";
import { IoMdClose } from "react-icons/io";

const ModalRead = ({ children, header, toggleModal }) => {
  return (
    <>
      <div
        id="readProductModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          toggleModal ? "flex" : ""
        } fixed left-0 right-0 z-50 block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full ${
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
        <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <div className="flex justify-between mb-4 rounded-t sm:mb-5">
              <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                <h3 className="font-semibold ">{header}</h3>
              </div>
              <div>
                <ButtonIcon color={"red"} onClick={toggleModal} type="button">
                  <IoMdClose className="w-5 h-5" fill="currentColor" />
                </ButtonIcon>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRead;
