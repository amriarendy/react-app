import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { RiLayout6Fill } from "react-icons/ri";

const MenuList = ({ item }) => {
  const [useOpen, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!useOpen);
  };
  return (
    <>
      {item.route != "collapse" ? (
        <li>
          <Link
            to={item.route}
            className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        </li>
      ) : (
        <li>
          <button
            type="button"
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={toggleSidebar}
            aria-expanded={useOpen ? "true" : "false"}
          >
            <RiLayout6Fill
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              {item.label}
            </span>
            <IoIosArrowDown
              className={`w-6 h-6 transform ${
                useOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="currentColor"
            />
          </button>
          <ul className={`py-2 space-y-2 ${useOpen ? "block" : "hidden"}`}>
            {item.subMenu.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.route}
                  className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      )}
    </>
  );
};

export default MenuList;
