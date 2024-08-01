import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ButtonDynamic } from "../../ui/Button";
import { useState, useRef, useEffect } from "react";
import { Href, HrefDynamic } from "../../ui/Href";

const Taction = ({ attribute, taction, toggleModal, param }) => {
  const [useOpen, setOpen] = useState(false);
  const buttonRef = useRef(null); // Referensi ke tombol dropdown
  const dropdownRef = useRef(null); // Referensi ke dropdown
  const [dropdownStyle, setDropdownStyle] = useState({});

  const toggleTableAction = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (useOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "absolute",
        inset: "0px auto auto 0px",
        top: `${buttonRect.bottom + window.scrollY}px`,
        left: `${buttonRect.left + window.scrollX}px`,
        transform: `translate(${buttonRect.left}px, ${buttonRect.bottom}px)`,
      });
    }
  }, [useOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <td className="px-4 py-3 flex items-center justify-end relative">
        <ButtonDynamic
          ref={buttonRef}
          onClick={toggleTableAction}
          type={"button"}
          color={"gray"}
          aria-expanded={useOpen ? "true" : "false"}
        >
          <HiOutlineDotsHorizontal className="w-6 h-6" fill="currentColor" />
        </ButtonDynamic>
        <div
          ref={dropdownRef}
          id={`dropdown-action-${taction.id}`}
          className={`${
            useOpen ? "block" : "hidden"
          } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
          style={dropdownStyle}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="apple-imac-27-dropdown-button"
          >
            <li>
              {attribute.edit &&
                (attribute.edit.route === "toggleEditModal" ? (
                  <ButtonDynamic
                    className={
                      "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    }
                    onClick={toggleModal}
                    type={"button"}
                  >
                    Edit
                  </ButtonDynamic>
                ) : (
                  <HrefDynamic
                    route={`${attribute.edit.route}/${param}`}
                    label="Edit"
                    className={
                      "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    }
                  />
                ))}
            </li>
          </ul>
          <div className="py-1">
            {attribute.delete &&
              (attribute.delete.route === "toggledeleteModal" ? (
                <ButtonDynamic
                  className={
                    "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  }
                  onClick={toggleModal}
                  type={"button"}
                >
                  Delete
                </ButtonDynamic>
              ) : (
                <HrefDynamic
                  route={`${attribute.delete.route}/${param}`}
                  label="Delete"
                  className={
                    "block font-semibold py-2 px-4 text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  }
                />
              ))}
          </div>
        </div>
      </td>
    </>
  );
};

export default Taction;
