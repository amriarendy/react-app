import React, { useEffect, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";

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
      <button
        id="theme-toggle"
        data-tooltip-target="tooltip-toggle"
        type="button"
        onClick={toggleDarkMode}
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      >
        <FaMoon
          className={`${useOpen ? "hidden" : ""} w-5 h-5`}
          fill="currentColor"
        />
        <FaRegSun
          className={`${useOpen ? "" : "hidden"} w-5 h-5`}
          fill="currentColor"
        />
      </button>
      <div
        id="tooltip-toggle"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Toggle dark mode
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default DarkMode;
