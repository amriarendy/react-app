import React from "react";

const Terrors = ({ children, colSpan, classname }) => {
  return (
    <td
      colSpan={colSpan}
      className={`whitespace-nowrap px-3 py-8 text-sm ${classname} text-center`}
    >
      <span className="font-semibold text-xl text-red-600">{children}</span>
    </td>
  );
};

export default Terrors;
