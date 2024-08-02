import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Paginate from "../../pagination/Paginate";

const Tfoot = () => {
  return (
    <>
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <Paginate />
      </nav>
    </>
  );
};

export default Tfoot;
