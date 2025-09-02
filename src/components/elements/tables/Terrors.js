import React from "react";

const Terrors = ({ children, colSpan, classname }) => {
  return (
    <td colSpan={colSpan} className={`whitespace-nowrap px-3 py-4 text-sm ${classname}`}>
        {children}
    </td>
  );
};

export default Terrors;
