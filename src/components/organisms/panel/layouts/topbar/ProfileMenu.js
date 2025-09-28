import { useState } from "react";
import Href from "../../../../elements/href/Href";
import Image from "../../../../elements/image/Image";
import Button from "../../../../elements/button/Button";

const ProfileMenu = () => {
  const [useOpen, setOpen] = useState(false);
  const toggleProfileMenu = () => {
    setOpen(!useOpen);
  };
  const menuItems = [
    { label: "Dashboard", route: "/dashboard" },
    { label: "Inbox", route: "/inbox" },
    { label: "Settings", route: "/setting" },
    { label: "Change Password", route: "/dashboard/change-password" },
    { label: "Sign out", route: "/signout" },
  ];
  return (
    <>
      <Button
        type="button"
        onClick={toggleProfileMenu}
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open user menu</span>

        <Image
          id="image-square-small"
          src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
          alt="Image Square Small"
          classname="mb-4 rounded-full w-10 h-10 sm:mb-0 xl:mb-4 2xl:mb-0"
        />
      </Button>
      <div
        className={`z-20 z-50 ${
          useOpen ? "block" : "hidden"
        } max-w-sm my-10 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700 ${
          useOpen ? "block" : ""
        } fixed top-5 right-5`}
        id="dropdown-2"
      >
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900 dark:text-white" role="none">
            Neil Sims
          </p>
          <p
            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
            role="none"
          >
            neil.sims@flowbite.com
          </p>
        </div>
        <ul className="py-1" role="none">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Href
                route={item.route}
                classname={
                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                }
              >
                {item.label}
              </Href>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileMenu;
