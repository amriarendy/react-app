import { FaSearch } from "react-icons/fa";
import InputForm from "../input/InputForm";
import Button from "../button/Button";
import Href from "../../elements/href/Href";
import InputButton from "../input/InputButton";

const Tattribute = ({ attribute }) => {
  if (!attribute) return null;

  const { id, value, onChange, name, type, placeholder, label, action } =
    attribute;

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <InputButton
            value={value}
            onChange={onChange}
            id={"input-search"}
            name={"input-search"}
            type={"text"}
            placeholder={placeholder}
          >
            <FaSearch className="w-4 h-4" />
          </InputButton>
        </div>
        <div className="sm:flex-none">
          {typeof action === "function" ? (
            <Button
              id={"btnAdd"}
              type={"button"}
              onClick={action}
              classname={
                "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              }
            >
              {label}
            </Button>
          ) : (
            <Href
              route={action}
              label={label}
              classname={
                "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              }
            >
              {label}
            </Href>
          )}
        </div>
      </div>
    </>
  );
};

export default Tattribute;
