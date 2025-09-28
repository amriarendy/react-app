import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../elements/logo/Logo";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const [useOpen, setOpen] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const toggleDarkMode = () => {
    const newValue = !useOpen;
    setOpen(newValue);
    localStorage.setItem("darkMode", newValue.toString());
  };
  useEffect(() => {
    checkAuth();
    const htmlElement = document.querySelector("html");
    if (useOpen) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [useOpen]);

  const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:3001/token");
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("User not authenticated:", error);
    }
  };

  return (
    <>
      <main className="bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
          <div className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
            <Logo route={"/"}>React.JS</Logo>
          </div>
          {children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
