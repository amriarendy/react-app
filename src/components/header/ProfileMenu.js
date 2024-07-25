import React, { useState } from "react";
import { HrefProfile } from "../ui/Href";

const ProfileMenu = () => {
  const [useOpen, setOpen] = useState(false);
  const toggleProfileMenu = () => {
    setOpen(!useOpen);
  };
  const menuItems = [
    { label: "Dashboard", route: "/dashboard" },
    { label: "Settings", route: "/setting" },
    { label: "Earnings", route: "/earning" },
    { label: "Sign out", route: "/signout" },
  ];
  return (
    <>
      <div>
        <button
          onClick={toggleProfileMenu}
          type="button"
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button-2"
          aria-expanded="false"
          data-dropdown-toggle="dropdown-2"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
        </button>
      </div>
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
              <HrefProfile route={item.route} label={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileMenu;
