import { Button } from "../../../atoms/Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Href } from "../../../atoms/Href";

const Taction = ({ attribute, toggleModal, taction, destroy }) => {
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
              route={`${attribute.edit.route}/${taction.id}`}
              label="Edit"
              color="blue"
              icon={<FaEdit className="w-5 h-5 mr-2 -ml-1" />}
            />
          ))}
        {attribute.delete && (
          <Button
            type="button"
            label="Delete"
            color="red"
            onClick={() => destroy(taction.id)}
            icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
          />
        )}
      </td>
    </>
  );
};

export default Taction;
