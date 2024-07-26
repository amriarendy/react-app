import React, { useEffect, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { ButtonIcon } from "../ui/Button";

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
    </>
  );
};

export default DarkMode;
