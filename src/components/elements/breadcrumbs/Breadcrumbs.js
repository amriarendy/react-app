import { Link } from "react-router-dom";
import { IoMdHome, IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = ({ breadCrumbs }) => {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-4 gap-4 dark:bg-gray-900">
        <div className="mb-4 col-span-full xl:mb-2">
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <IoMdHome className="w-5 h-5 mr-2.5" fill="currentColor" />
                  Home
                </Link>
              </li>
              {breadCrumbs.data.map((item, index) => (
                <li className="inline-flex items-center" key={index}>
                  <Link
                    to={item.route}
                    className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                  >
                    <IoIosArrowForward
                      className="w-5 h-5 mr-2.5"
                      fill="currentColor"
                    />
                    {item.page}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            {breadCrumbs.page}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
