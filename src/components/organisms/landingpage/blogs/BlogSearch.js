import Button from "../../../elements/button/Button";
import { FaAngleDown } from "react-icons/fa";
import InputForm from "../../../elements/input/InputForm";

const BlogSearch = () => {
  return (
    <div className="mt-4 mb-4 border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
        Categories: All
      </h3>
      <div className="mt-3 sm:ml-4 sm:mt-0">
        <label for="mobile-search-candidate" className="sr-only">
          Search
        </label>
        <label for="desktop-search-candidate" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <InputForm
              id={"input-search"}
              name="input-search"
              type="text"
              placeholder="Enter for search.."
            >
              <Button
                type="button"
                classname={
                  "relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white"
                }
              >
                Sort
                <FaAngleDown
                  className="-mr-1 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </Button>
            </InputForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
