import { FaPlus } from "react-icons/fa";
import { InputSearch } from "../ui/Input";
import Button from "../ui/Button";
import { Href } from "../ui/Href";

const AttributeTable = ({ attribute, toggleModal }) => {
  return (
    <>
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 bg-white dark:bg-gray-800">
        {attribute.add &&
          (attribute.add.route === "toggleAddModal" ? (
            <Button
              type="button"
              label="Add"
              color="blue"
              onClick={toggleModal}
              icon={<FaPlus className="w-5 h-5 mr-3 -ml-1" />}
            />
          ) : (
            <Href
              route={attribute.add.route}
              label="Add"
              color="blue"
              icon={<FaPlus className="w-5 h-5 mr-3 -ml-1" />}
            />
          ))}
        {attribute.search && (
          <div className="relative">
            <InputSearch />
          </div>
        )}
      </div>
    </>
  );
};

export default AttributeTable;
