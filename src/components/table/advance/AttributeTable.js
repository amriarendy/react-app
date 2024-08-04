import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { FaPlus, FaFileExcel } from "react-icons/fa";
import { Href } from "../../ui/Href";

const AttributeTable = ({ attribute, toggleModal }) => {
  return (
    <>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1">
          <div class="sm:flex">
            {attribute.search && (
              <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                <form class="lg:pr-3" action="#" method="GET">
                  <div class="relative mt-1 lg:w-64 xl:w-96">
                    <Input
                      id={"search"}
                      name={"search"}
                      type={"text"}
                      placeholder={"Search"}
                      required={false}
                    />
                  </div>
                </form>
              </div>
            )}
            <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttributeTable;
