import { RiPieChartFill } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { FaCogs, FaBorderNone, FaSignOutAlt, FaUser } from "react-icons/fa";

export const SIDEBAR_MENU_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    route: "/",
    icon: (
      <RiPieChartFill
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      />
    ),
  },
  {
    key: "blog",
    label: "Blog",
    route: "/blog",
    icon: (
      <ImNewspaper
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      />
    ),
  },
  {
    key: "master",
    label: "Master",
    route: "collapse",
    subMenu: [
      {
        key: "category",
        label: "Category",
        route: "/master/category",
      },
      {
        key: "hashtag",
        label: "Hashtag",
        route: "/master/hashtag",
      },
    ],
  },
  {
    key: "user",
    label: "Users",
    route: "/user",
    icon: (
      <FaUser
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      />
    ),
  },
  {
    key: "setting",
    label: "Setting",
    route: "/setting",
    icon: (
      <FaCogs
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      />
    ),
  },
  {
    key: "blank",
    label: "Blank",
    route: "/blank",
    icon: (
      <FaBorderNone
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      />
    ),
  },
  {
    key: "signout",
    label: "Sign Out",
    route: "/signout",
    icon: (
      <FaSignOutAlt
        className="w-6 h-6 text-red-500 transition duration-75 group-hover:text-red-900 dark:text-red-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      />
    ),
  },
];

export const SIDEBAR_BOTTOM_MENU_ITEMS = {};
