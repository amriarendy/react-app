import { ButtonDynamic } from "../../ui/Button";
import { Href } from "../../ui/Href";

const Taction = ({ attribute, taction, toggleModal }) => {
  return (
    <>
      <td className="px-4 py-3 space-x-2 ">
        {attribute.edit &&
          (attribute.edit.route === "toggleEditModal" ? (
            <ButtonDynamic
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={toggleModal}
            >
              Edit
            </ButtonDynamic>
          ) : (
            <Href
              route={`${attribute.edit.route}/${taction.id}`}
              label="Edit"
              color="blue"
            />
          ))}
        {attribute.delete &&
          (attribute.delete.route === "toggleModal" ? (
            <ButtonDynamic
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={toggleModal}
            >
              Delete
            </ButtonDynamic>
          ) : (
            <Href
              route={`${attribute.edit.route}/${taction.id}`}
              label="Delete"
              color="red"
            />
          ))}
      </td>
    </>
  );
};

export default Taction;
