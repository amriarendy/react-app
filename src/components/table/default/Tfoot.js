import PaginateArrow from "../../pagination/PaginateArrow";
import ShowEntries from "../../pagination/ShowEntries";

const Tfoot = () => {
  return (
    <>
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <ShowEntries />
        <PaginateArrow />
      </nav>
    </>
  );
};

export default Tfoot;
