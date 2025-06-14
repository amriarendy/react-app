import LOGO from "../../logo512.png";
import { WELCOME_MENU_ITEMS } from "../../libs/constants/navigations";
import MenuItem from "../../components/menu/MenuItem";
import DarkMode from "../header/DarkMode";

const TopBar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="" className="">
                  <img
                    className="block w-auto h-8 dark:hidden"
                    src={LOGO}
                    alt=""
                  />
                  <img
                    className="hidden w-auto h-8 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                    alt=""
                  />
                </a>
              </div>

              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                {" "}
                {WELCOME_MENU_ITEMS.map((item) => (
                  <MenuItem
                    key={item.key}
                    route={item.route}
                    label={item.label}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </div>
            <div class="flex items-center lg:order-2">
              <DarkMode />
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              id="ecommerce-navbar-menu-1"
              class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
            >
              <ul class="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
                <li>
                  <a
                    href="#"
                    class="hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    Electronics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-blue-700 dark:hover:text-blue-500"
                  >
                    Home & Garden
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
