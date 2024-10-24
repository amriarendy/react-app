import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ route, label }) => {
  return (
    <>
      <li>
        <Link
          to={route}
          className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
        >
          {label}
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
