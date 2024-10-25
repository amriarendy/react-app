import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuItem = ({ route, label, icon }) => {
  return (
    <>
      <li>
        <Link
          to={route}
          className="flex text-md font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          {icon && <span className="mr-2">{icon}</span>}{label}
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
