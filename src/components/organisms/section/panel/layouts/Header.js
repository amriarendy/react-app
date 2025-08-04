import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Notification from "../../../../molecules/panel/Notification";
import ProfileMenu from "../../../../molecules/panel/ProfileMenu";
import DarkMode from "../../../../molecules/darkmode/DarkMode";
import { Image } from "../../../../atoms/Image";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Header = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/token");
      setToken(response.data.accessToken);
      const decode = jwtDecode(response.data.accessToken);
      setName(decode.name);
      setExpire(decode.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       const response = await axios.get("http://localhost:3001/token");
  //       config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //       setToken(response.data.accessToken);
  //       const decode = jwtDecode(response.data.accessToken);
  //       setName(decode.name);
  //       setExpire(decode.exp);
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:3001/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
              <Link to={"#"} className="flex ml-2 md:mr-24">
                <Image
                  src={
                    "https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
                  }
                  alt={"logo"}
                  className={"h-8 mr-3"}
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </Link>
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
