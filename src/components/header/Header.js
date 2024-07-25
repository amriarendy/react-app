import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Notification from "./Notification";
import ProfileMenu from "./ProfileMenu";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <GiHamburgerMenu className="w-6 h-6" fill="currentColor" />
                <MdClose
                  id="toggleSidebarMobileClose"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                />
              </button>
              <a href="#" className="flex ml-2 md:mr-24">
                <img
                  src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center">
              {/* <!-- Notifications --> */}
              <Notification />

              {/* <!-- Dark Mode --> */}
              <DarkMode />

              {/* <!-- Profile Menu --> */}
              <div className="flex items-center ml-3">
                <ProfileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
