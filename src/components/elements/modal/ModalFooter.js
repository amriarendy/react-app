import Button from "../button/Button";
import { FaSave } from "react-icons/fa";

const ModalFooter = ({toggleModal}) => {
    return (
        <>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Button id={"btnSave"} type={"submit"} classname={"px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>
                    Submit
                </Button>
                <Button id={"btnDetail"} type={"button"} onClick={toggleModal} classname={"py-2.5 px-5 ms-3 px-5 py-2.5 text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"}>
                    Detail
                </Button>
                <Button id={"btnClose"} type={"button"} classname={"py-2.5 px-5 ms-3 px-5 py-2.5 text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"}>
                    Close
                </Button>
            </div>
        </>
    )
}

export default ModalFooter;