import LOGO from "../../logo512.png";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
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
                  />
                ))}
              </ul>
            </div>

            <DarkMode />
            <div
              id="ecommerce-navbar-menu-1"
              class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
            >
              <ul class="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
                <li>
                  <a
                    href="#"
                    class="hover:text-primary-700 dark:hover:text-primary-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-primary-700 dark:hover:text-primary-500"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-primary-700 dark:hover:text-primary-500"
                  >
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-primary-700 dark:hover:text-primary-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-primary-700 dark:hover:text-primary-500"
                  >
                    Electronics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:text-primary-700 dark:hover:text-primary-500"
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
