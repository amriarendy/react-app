import React from "react";

const Trow = ({ children, classname }) => {
  return <tr className={`dark:border-gray-800`}>{children}</tr>;
};

export default Trow;
