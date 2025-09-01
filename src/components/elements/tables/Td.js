import React from "react";

const Td = ({ children, classname }) => {
  return (
    <td className={`whitespace-nowrap px-3 py-4 text-sm ${classname}`}>
      {children}
    </td>
  );
};
export default Td;
