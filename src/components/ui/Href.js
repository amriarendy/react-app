import { Link } from "react-router-dom";

const Href = ({ id, label, icon, color, route }) => {
  return (
    <>
      <Link
        to={route}
        id={id}
        className={`inline-flex justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-${color}-600 rounded-lg bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 sm:w-auto dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
      >
        {icon}
        {label}
      </Link>
    </>
  );
};

const HrefText = ({ label, color, route }) => {
  return (
    <>
      <Link
        to={route}
        className={`ml-auto text-sm text-${color}-700 hover:underline dark:text-${color}-500`}
      >
        {label}
      </Link>
    </>
  );
};

export { Href, HrefText };
