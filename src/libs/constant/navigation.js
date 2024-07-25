import React from "react";
import {
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineLogout,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { HiOutlineTableCells } from "react-icons/hi2";

export const SIDEBAR_MENU_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    route: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "product",
    label: "Product",
    route: "/product",
    icon: <HiOutlineCube />,
  },
  {
    key: "table",
    label: "Table",
    route: "/table",
    icon: <HiOutlineTableCells />,
  },
  {
    key: "setting",
    label: "Setting",
    route: "/setting",
    icon: <HiOutlineCog />,
  },
  {
    key: "signout",
    label: "Sign Out",
    route: "/signout",
    icon: <HiOutlineLogout />,
  },
];
