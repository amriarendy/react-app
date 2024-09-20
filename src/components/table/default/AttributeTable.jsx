import { Button } from "../../ui/Button";
import { Href } from "../../ui/Href";
import { InputSearch } from "../../ui/Input";

const AttributeTable = ({ attribute, toggleModal }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          {attribute.search && (
            <form className="flex items-center">
              <InputSearch />
            </form>
          )}
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          {attribute.add &&
            (attribute.add.route === "toggleAddModal" ? (
              <Button
                type="button"
                label="Add Data"
                color="blue"
                onClick={toggleModal}
              />
            ) : (
              <Href route={attribute.add.route} label="Add Data" color="blue" />
            ))}
        </div>
      </div>
    </>
  );
};

export default AttributeTable;
