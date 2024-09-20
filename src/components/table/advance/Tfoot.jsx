import PaginatePrevNext from "../../pagination/PaginatePrevNext";
import ShowEntries from "../../pagination/ShowEntries";

const Tfoot = () => {
  return (
    <>
      <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
        <ShowEntries />
        <PaginatePrevNext />
      </div>
    </>
  );
};

export default Tfoot;
