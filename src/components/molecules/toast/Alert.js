import { RiCloseFill, RiErrorWarningLine } from "react-icons/ri";
import { FaCheck, FaInfoCircle, FaEye } from "react-icons/fa";
import { TiWarningOutline } from "react-icons/ti";
import { Button, ButtonIcon } from "../../atoms/Button";

const Alert = ({ code, status, message }) => {
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
        <ButtonIcon>
          <RiCloseFill className="w-6 h-6" />
        </ButtonIcon>
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
        <Button>
          <RiCloseFill className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
};

export { Alert, AlertList, AlertBorder };

function AlertStatus ({ code, status }) {
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