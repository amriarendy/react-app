import React from "react";

const Th = ({ children, classname }) => {
  return (
    <th
      scope="col"
      className={`py-3.5 pl-4 text-left text-sm font-semibold ${classname}`}
    >
      {children}
    </th>
  );
};

export default Th;
