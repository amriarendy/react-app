import { RiPieChartFill, RiLayout6Fill, RiQuestionLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import {
  FaCode,
  FaUser,
  FaDatabase,
  FaBook,
  FaStoreAlt,
  FaHome,
} from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

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
        key: "pagination",
        label: "Pagination",
        route: "/dashboard/templates/pagination",
      },
      {
        key: "card",
        label: "Card",
        route: "/dashboard/templates/card",
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
    route: "/build-app",
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
    label: " Home",
    icon: (
      <FaHome className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    route: "/",
  },
  {
    key: "blog",
    label: "Blog",
    icon: (
      <IoNewspaperOutline className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    route: "/blog",
  },
  {
    key: "ecommerce",
    label: "Ecommerce",
    icon: (
      <FaStoreAlt className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    route: "/ecommerce",
  },
  {
    key: "build-app",
    label: "Build App",
    icon: (
      <FaCode className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    route: "/build-app",
  },
  {
    key: "about",
    label: "About",
    icon: (
      <RiQuestionLine className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    route: "/about",
  },
];
