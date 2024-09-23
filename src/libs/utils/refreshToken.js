import { SERVER_API } from "./api";
import { axiosJWT } from "../libs/utils/axiosJwt";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const [token, setToken] = useState("");
const [expire, setExpire] = useState("");
const navigate = useNavigate();

useEffect(() => {
  refreshToken();
}, []);

const refreshToken = async () => {
  try {
    const response = await axios.get(`${SERVER_API}/token`);
    setToken(response.data.accessToken);
    const decode = jwtDecode(response.data.accessToken);
    setExpire(decode.exp);
  } catch (error) {
    if (error.response) {
      navigate("/login");
    }
  }
};

export default refreshToken;