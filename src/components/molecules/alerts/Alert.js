import { RiCloseFill, RiErrorWarningLine } from "react-icons/ri";
import { FaCheck, FaInfoCircle, FaEye } from "react-icons/fa";
import { TiWarningOutline } from "react-icons/ti";
import { ButtonDynamic } from "../../atoms/Button";

function AlertStatus({ code, status }) {
  let color;
  let icon;
  if (code === 200 || status === "success") {
    color = "green";
    icon = <FaCheck className="flex-shrink-0 w-4 h-4 me-2 mt-[2px]" />;
  } else if (code === 422 || status === "warning") {
    color = "yellow";
    icon = (
      <RiErrorWarningLine className="flex-shrink-0 w-4 h-4 me-2 mt-[2px]" />
    );
  } else if (code === 500 || status === "danger") {
    color = "red";
    icon = <TiWarningOutline className="flex-shrink-0 w-4 h-4 me-2 mt-[2px]" />;
  } else {
    color = "blue";
    icon = <FaInfoCircle className="flex-shrink-0 w-4 h-4 me-2 mt-[2px]" />;
  }
  return { color, icon };
}

const Alert = ({ code, status, message }) => {
  console.log("alert: ", code);
  const { color, icon } = AlertStatus({ code, status });
  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 text-${color}-800 rounded-lg bg-${color}-50 dark:bg-gray-900 dark:text-${color}-400`}
        role="alert"
      >
        {icon}
        <span className="sr-only">Info</span>
        <div className="ms-3 text-sm font-medium">{message}</div>
        <ButtonDynamic
          className={`ms-auto -mx-1.5 -my-1.5 bg-${color}-50 text-${color}-500 rounded-lg focus:ring-2 focus:ring-${color}-400 p-1.5 hover:bg-${color}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-900 dark:text-${color}-400 dark:hover:bg-gray-700`}
        >
          <RiCloseFill className="w-6 h-6" />
        </ButtonDynamic>
      </div>
    </>
  );
};

const AlertList = ({ code, status, label, data }) => {
  const { color, icon } = AlertStatus({ code, status });
  return (
    <>
      <div
        className={`flex p-4 mb-4 text-sm text-${color}-800 rounded-lg bg-${color}-50 dark:bg-gray-900 dark:text-${color}-400`}
        role="alert"
      >
        {icon}
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{label}:</span>
          <ul className="mt-1.5 list-disc list-inside">
            {data.map((item, index) => (
              <li key={index}>{item.message}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const AlertBorder = ({ code, status, message }) => {
  const { color, icon } = AlertStatus({ code, status });
  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 text-${color}-800 border-t-4 border-${color}-300 bg-${color}-50 dark:text-${color}-400 dark:bg-gray-900 dark:border-${color}-800`}
        role="alert"
      >
        {icon}
        <div className="ms-3 text-sm font-medium">{message}</div>
        <ButtonDynamic
          className={`ms-auto -mx-1.5 -my-1.5 bg-${color}-50 text-${color}-500 rounded-lg focus:ring-2 focus:ring-${color}-400 p-1.5 hover:bg-${color}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-900 dark:text-${color}-400 dark:hover:bg-gray-700`}
        >
          <RiCloseFill className="w-6 h-6" />
        </ButtonDynamic>
      </div>
    </>
  );
};

const AlertAditionalContent = ({ code, status, label, message, more }) => {
  const { color, icon } = AlertStatus({ code, status });
  return (
    <>
      <div
        className={`p-4 mb-4 text-${color}-800 border border-${color}-300 rounded-lg bg-${color}-50 dark:bg-gray-900 dark:text-${color}-400 dark:border-${color}-800`}
        role="alert"
      >
        <div className="flex items-center">
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">{label}</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">{message}</div>
        <div className="flex">
          <ButtonDynamic
            className={`text-white bg-${color}-800 hover:bg-${color}-900 focus:ring-4 focus:outline-none focus:ring-${color}-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
          >
            <FaEye className="me-2 h-3 w-3" fill="currentColor" />
            View More
          </ButtonDynamic>
          <ButtonDynamic
            className={`text-${color}-800 bg-transparent border border-${color}-800 hover:bg-${color}-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-${color}-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-${color}-600 dark:border-${color}-600 dark:text-${color}-400 dark:hover:text-white dark:focus:ring-${color}-800`}
          >
            Dismiss
          </ButtonDynamic>
        </div>
      </div>
    </>
  );
};

export { Alert, AlertList, AlertBorder, AlertAditionalContent };
