import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const PaginatePrevNext = () => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <Link
          route="#"
          className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <IoIosArrowBack className="w-5 h-5 mr-1 -ml-1" fill="currentColor" />
          Previous
        </Link>
        <Link
          route="#"
          className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
          <IoIosArrowForward
            className="w-5 h-5 ml-1 -mr-1"
            fill="currentColor"
          />
        </Link>
      </div>
    </>
  );
};

export default PaginatePrevNext;
