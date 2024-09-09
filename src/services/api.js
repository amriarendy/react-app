import useDummy from "../hooks/useDummy";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const SERVER_API = "http://localhost:3001"; 

// Create an instance of axios
const axiosCreate = axios.create();
// Add a request interceptor
const axiosJWT = axiosCreate.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    const token = localStorage.getItem('accessToken'); // Fetch token from local storage or state
    const expire = localStorage.getItem('expire'); // Fetch expiration time from local storage or state

    if (token && expire * 1000 < currentDate.getTime()) {
      try {
        const response = await axios.get("http://localhost:3001/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        localStorage.setItem('accessToken', response.data.accessToken);
        const decode = jwtDecode(response.data.accessToken);
        localStorage.setItem('expire', decode.exp);
      } catch (error) {
        console.error("Token refresh error:", error);
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export {axiosJWT, SERVER_API}