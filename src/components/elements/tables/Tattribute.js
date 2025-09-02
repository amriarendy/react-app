import { FaSearch } from "react-icons/fa";
import InputForm from "../input/InputForm";
import Button from "../button/Button";

const Tattribute = ({ attribute, toggleModal }) => {
  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <InputForm
            id={"inputSearch"}
            name={"inputSearch"}
            type={"inputSearch"}
            placeholder={"Search Everything"}
            required={true}
          >
            <FaSearch className="w-4 h-4" />
          </InputForm>
        </div>
        <div className="sm:ml-8 sm:flex-none">
        {attribute.add &&
            (attribute.add.route === "toggleAddModal" ? (
          <Button
            id={"btnDeleteProduct"}
            type={"button"}
            classname={
              "p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }
          >
            Create Data
          </Button>
          ) : (
            <Href route={attribute.add.route} label="Add Data" color="blue" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tattribute;
