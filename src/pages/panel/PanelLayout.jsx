import FooterPanel from "../../components/footer/FooterPanel";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

const PanelLayout = ({ children }) => {
  // const [name, setName] = useState("");
  // const [token, setToken] = useState("");
  // const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/token");
  //     setToken(response.data.accessToken);
  //     const decode = jwtDecode(response.data.accessToken);
  //     setName(decode.name);
  //     setExpire(decode.exp);
  //   } catch (error) {
  //     if (error.response) {
  //       navigate("/login");
  //     }
  //   }
  // };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       const response = await axios.get("http://localhost:5000/token");
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
      <Header />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar logout={Logout} />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <section className="min-h-screen">{children}</section>
          </main>
          <FooterPanel />
        </div>
      </div>
    </>
  );
};

export default PanelLayout;
