import axios from "axios";
import { jwtDecode } from "jwt-decode";

const SERVER_API = "http://localhost:3001";

const axiosCreate = axios.create();
axiosCreate.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    const token = localStorage.getItem("accessToken");
    const expire = localStorage.getItem("expire");
    if (token && expire * 1000 < currentDate.getTime()) {
      try {
        const response = await axios.get(`${SERVER_API}/token`);
        const newToken = response.data.accessToken;
        config.headers.Authorization = `Bearer ${newToken}`;
        localStorage.setItem("accessToken", newToken);
        const decode = jwtDecode(newToken);
        localStorage.setItem("expire", decode.exp);
      } catch (error) {
        console.error("Token refresh error:", error);
      }
    } else if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosCreate as axiosJWT, SERVER_API };
