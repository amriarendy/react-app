import PanelLayout from "./PanelLayout";
import Chart from "../../components/chart/Chart";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // const [name, setName] = useState("");
  // const [token, setToken] = useState("");
  // const [expire, setExpire] = useState("");
  // const navigate = useNavigate();

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

  // axiosJWT.axios.interceptors.request.use(
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

  return (
    <>
      <PanelLayout>
        <div className="grid grid-cols-1 bg-white px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <Chart />
        </div>
      </PanelLayout>
    </>
  );
};

export default Dashboard;
