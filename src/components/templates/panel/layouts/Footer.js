import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                to={"https://instagram.com/amriarendy/"}
                className="hover:underline me-4 md:me-6"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                to={"https://github.com/amriarendy/react-app"}
                className="hover:underline me-4 md:me-6"
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                to={"https://saweria.co/amriarendy"}
                className="hover:underline"
                target="_blank"
              >
                Buy Me Coffee ☕ 😁
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
