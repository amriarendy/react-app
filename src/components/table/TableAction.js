import { Button } from "../ui/Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Href } from "../ui/Href";

const TableAction = ({ attribute, toggleModal, param }) => {
  return (
    <>
      <td className="p-4 space-x-2 whitespace-nowrap">
        {attribute.edit &&
          (attribute.edit.route === "toggleEditModal" ? (
            <Button
              type="button"
              label="Edit"
              color="blue"
              onClick={toggleModal}
              icon={<FaEdit className="w-5 h-5 mr-2 -ml-1" />}
            />
          ) : (
            <Href
              route={`${attribute.edit.route}/${param}`}
              label="Edit"
              color="blue"
              icon={<FaEdit className="w-5 h-5 mr-2 -ml-1" />}
            />
          ))}
        {attribute.delete &&
          (attribute.delete.route === "toggleModal" ? (
            <Button
              type="button"
              label="Delete"
              color="red"
              onClick={toggleModal}
              icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
            />
          ) : (
            <Href
              route={attribute.delete.route}
              label="Delete"
              color="red"
              icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
            />
          ))}
      </td>
    </>
  );
};

export default TableAction;
