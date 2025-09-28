import { SIDEBAR_MENU_ITEMS } from "../../../../libs/constants/navigations";
import MenuList from "../../../organisms/panel/layouts/sidebar/MenuList";
import { FaSignOutAlt, FaBookmark, FaCog, FaBook } from "react-icons/fa";
import Href from "../../../elements/href/Href";
import Button from "../../../elements/button/Button";
import { useState } from "react";

const Sidebar = ({ logout }) => {
  const [useOpen, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!useOpen);
  };
  return (
    <>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                {SIDEBAR_MENU_ITEMS.map((item) => (
                  <MenuList key={item.key} item={item} />
                ))}
                <li>
                  <Button
                    onClick={logout}
                    classname={
                      "flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                    }
                  >
                    <FaSignOutAlt className="w-6 h-6 text-red-500 transition duration-75 group-hover:text-red-900 dark:text-red-400 dark:group-hover:text-white" />
                    <span className="ml-3 font-bold">SignOut</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800">
            <div>
              <Href
                route=""
                classname={
                  "inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                <FaBookmark className="w-6 h-6" fill="currentColor" />
              </Href>
              <Href
                route=""
                classname={
                  "inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                <FaCog className="w-6 h-6" fill="currentColor" />
              </Href>
              <div
                id="tooltip-settings"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Settings page
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <Button
                route={"button"}
                classname={
                  "inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                <FaBook className="w-6 h-6" fill="currentColor" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90"
        id="sidebarBackdrop"
      ></div>
    </>
  );
};

export default Sidebar;
