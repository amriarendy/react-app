import React, { useEffect, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { Button, ButtonIcon } from "../ui/Button";

const DarkMode = () => {
  const [useOpen, setOpen] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const toggleDarkMode = () => {
    const newValue = !useOpen;
    setOpen(newValue);
    localStorage.setItem("darkMode", newValue.toString());
  };
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (useOpen) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [useOpen]);
  return (
    <>
      <ButtonIcon id={"theme-toggle"} color={"gray"} onClick={toggleDarkMode}>
        <FaMoon
          className={`${useOpen ? "hidden" : ""} w-5 h-5`}
          fill="currentColor"
        />
        <FaRegSun
          className={`${useOpen ? "" : "hidden"} w-5 h-5`}
          fill="currentColor"
        />
      </ButtonIcon>
      {/* <div
        id="tooltip-toggle"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Toggle dark mode
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div> */}
    </>
  );
};

export default DarkMode;
