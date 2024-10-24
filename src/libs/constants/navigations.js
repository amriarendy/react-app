import { RiPieChartFill, RiLayout6Fill } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import {
  FaCogs,
  FaBorderNone,
  FaSignOutAlt,
  FaUser,
  FaDatabase,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";

export const SIDEBAR_MENU_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    route: "/dashboard/",
    icon: (
      <RiPieChartFill
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        fill="currentColor"
      />
    ),
  },
  {
    key: "blog",
    label: "Blog",
    route: "/dashboard/blog",
    icon: (
      <ImNewspaper
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        fill="currentColor"
      />
    ),
  },
  {
    key: "user",
    label: "Users",
    route: "/dashboard/user",
    icon: (
      <FaUser
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        fill="currentColor"
      />
    ),
  },
  {
    key: "master",
    label: "Master",
    route: "collapse",
    icon: (
      <FaDatabase
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        fill="currentColor"
      />
    ),
    subMenu: [
      {
        key: "category",
        label: "Category",
        route: "/dashboard/master/category",
      },
      {
        key: "hashtag",
        label: "Hashtag",
        route: "/dashboard/master/tag",
      },
    ],
  },
  {
    key: "template",
    label: "Template",
    route: "collapse",
    icon: (
      <RiLayout6Fill
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        fill="currentColor"
      />
    ),
    subMenu: [
      {
        key: "blank",
        label: "Blank",
        route: "/dashboard/templates/blank",
      },
      {
        key: "layout",
        label: "Layouts",
        route: "/dashboard/templates/layout",
      },
      {
        key: "alerts",
        label: "Alerts",
        route: "/dashboard/templates/alerts",
      },
      {
        key: "table-default",
        label: "Table Default",
        route: "/dashboard/templates/table-default",
      },
      {
        key: "table-advance",
        label: "Table Advance",
        route: "/dashboard/templates/table-advance",
      },
      {
        key: "form",
        label: "Form",
        route: "/dashboard/templates/form",
      },
      {
        key: "popup",
        label: "Popup",
        route: "/dashboard/templates/popup",
      },
      {
        key: "grid-cols",
        label: "Grid and Cols",
        route: "/dashboard/templates/grid-cols",
      },
      {
        key: "image",
        label: "Images",
        route: "/dashboard/templates/image",
      },
      {
        key: "page-error",
        label: "Page Error",
        route: "/dashboard/templates/page-error",
      },
      {
        key: "page-loading",
        label: "Page Loading",
        route: "/dashboard/templates/page-loading",
      },
      {
        key: "test",
        label: "Test Page",
        route: "/dashboard/templates/test",
      },
    ],
  },
  {
    key: "docs",
    label: "Docs",
    route: "/docs",
    icon: (
      <FaBook
        className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        fill="currentColor"
      />
    ),
  },
];

export const SIDEBAR_BOTTOM_MENU_ITEMS = {};

export const WELCOME_MENU_ITEMS = [
  {
    key: "home",
    label: "Home",
    route: "/",
  },
  {
    key: "profile",
    label: "Profile",
    route: "/profile",
  },
  {
    key: "product",
    label: "Product",
    route: "/products",
  },
  {
    key: "service",
    label: "Service",
    route: "/service",
  },
  {
    key: "contact",
    label: "Contact",
    route: "/contact",
  },
];
