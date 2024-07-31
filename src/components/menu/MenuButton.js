import { FaBookmark, FaCog, FaBook } from "react-icons/fa";

const MenuBottom = () => {
  return (
    <>
      <div>
        <a
          href="#"
          className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <FaBookmark className="w-6 h-6" fill="currentColor" />
        </a>
        <a
          href="#"
          data-tooltip-target="tooltip-settings"
          className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <FaCog className="w-6 h-6" fill="currentColor" />
        </a>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings page
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-dropdown-toggle="language-dropdown"
          className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <FaBook className="w-6 h-6" fill="currentColor" />
        </button>
      </div>
    </>
  );
};

export default MenuBottom;
