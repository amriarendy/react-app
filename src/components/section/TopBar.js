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

            <DarkMode />
            <div class="flex items-center lg:order-2">
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</a>
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
