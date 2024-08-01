import { Button } from "../../ui/Button";
import { InputSearchDefault } from "../../ui/Input";
import { FaPlus } from "react-icons/fa";

const AttributeTable = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
                <form className="flex items-center">
                    <InputSearchDefault />
                </form>
            </div>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <Button
                    type="button"
                    label="Add Data"
                    color="blue"
                    icon={<FaPlus className="w-3.5 h-3.5 mr-2 mt-1 -ml-1" fill="currentColor" />}
                    />
                </div>
                
          </div>
        </>
    )
}

export default AttributeTable;