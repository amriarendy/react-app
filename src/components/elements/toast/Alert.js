import { FaCheck } from "react-icons/fa";
import { TiWarningOutline } from "react-icons/ti";
import { MdError } from "react-icons/md";

const Alert = ({ title, description, status }) => {
  let styles = "";
  let Icon = null;

  if (status === "success") {
    styles = "bg-teal-100 border-t-4 border-teal-500 text-teal-900";
    Icon = <FaCheck className="fill-current h-6 w-6 text-teal-500 mr-4" />;
  } else if (status === "error") {
    styles = "bg-red-100 border-t-4 border-red-500 text-red-900";
    Icon = <MdError className="fill-current h-6 w-6 text-red-500 mr-4" />;
  } else if (status === "warning") {
    styles = "bg-yellow-100 border-t-4 border-yellow-500 text-yellow-900";
    Icon = (
      <TiWarningOutline className="fill-current h-6 w-6 text-yellow-500 mr-4" />
    );
  }

  return (
    <div className={`${styles} rounded-b px-4 py-3 shadow-md`} role="alert">
      <div className="flex">
        <div className="py-1">{Icon}</div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
