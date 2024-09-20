import { useEffect, useState } from "react";

const AuthLayout = ({ children }) => {
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
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
          <a
            href="#"
            className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
          >
            <img
              src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
              className="mr-4 h-11"
              alt="FlowBite Logo"
            />
            <span>Flowbite</span>
          </a>
          {children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
