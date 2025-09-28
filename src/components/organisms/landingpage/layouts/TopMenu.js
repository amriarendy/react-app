import { WELCOME_MENU_ITEMS } from "../../../../libs/constants/navigations";
import DarkMode from "../../../elements/darkmode/DarkMode";
import { Link } from "react-router-dom";
import Logo from "../../../elements/logo/Logo";
import Href from "../../../elements/href/Href";

const TopMenu = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="shrink-0">
            <Logo route={"/"} />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
            {" "}
            {WELCOME_MENU_ITEMS.map((item) => (
              <Href
                key={item.key}
                route={item.route}
                classname={
                  "flex text-md font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                }
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Href>
            ))}
          </ul>
        </div>
        <div className="flex items-center lg:order-2">
          <DarkMode />
          <Link
            to={"/login"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
