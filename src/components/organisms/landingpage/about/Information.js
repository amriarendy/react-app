import { Link } from "react-router-dom";
import AboutBacgkround from "../../../molecules/backgrounds/AboutBacgkround";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Information = ({ useDark }) => {
    return (
      <>
        
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              {!useDark && <AboutBacgkround />}
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                About & Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                HI, my name Amria Rendy. I'am software engineer!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-white">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <FaGithub
                      className="h-7 w-10 text-gray-400"
                    />
                  </dt>
                  <dd>
                  <Link to={"https://github.com/amriarendy"}>
                    https://github.com/amriarendy
                  </Link></dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <FaLinkedin
                      className="h-7 w-10 text-gray-400"
                    />
                  </dt>
                  <dd>

                  <Link to={"https://linkedin.com/in/amriarendy"}>
                    https://linkedin.com/in/amriarendy
                  </Link>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <FaInstagram
                      className="h-7 w-10 text-gray-400"
                    />
                  </dt>
                  <dd>

                  <Link to={"https://instagram.com/amriarendy"}>
                    https://instagram.com/amriarendy
                  </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
      </>
    );
  };
  
  export default Information;
  