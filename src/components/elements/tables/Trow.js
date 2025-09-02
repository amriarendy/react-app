import React from "react";

const Trow = ({ children, classname }) => {
  return <tr className={`${classname} dark:border-gray-800`}>{children}</tr>;
};

export default Trow;
