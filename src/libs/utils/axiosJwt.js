import axios from "axios";
import { jwtDecode } from "jwt-decode";

const axiosJWT = axios.create();

let token = "";
let expire = "";

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get("http://localhost:3001/token");
      token = response.data.accessToken;
      config.headers.Authorization = `Bearer ${token}`;
      const decode = jwtDecode(token);
      expire = decode.exp;
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosJWT, setTokenAndExpire };

const setTokenAndExpire = (newToken) => {
  token = newToken;
  const decode = jwtDecode(newToken);
  expire = decode.exp;
};
