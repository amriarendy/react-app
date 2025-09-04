import { IoMdClose } from "react-icons/io";
import Button from "../../elements/button/Button";

const ModalLabel = ({ label, toggleModal }) => {
  return (
    <>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {label}
                </h3>
                <Button id={"closeButton"} type={"button"} onClick={toggleModal}>
          <IoMdClose className="w-5 h-5" fill="currentColor" />
        </Button>
            </div>
      {/* <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {label}
        </h3>
        <Button id={"closeButton"} type={"button"} onClick={toggleModal}>
          <IoMdClose className="w-5 h-5" fill="currentColor" />
        </Button>
      </div> */}
    </>
  );
};

export default ModalLabel;
