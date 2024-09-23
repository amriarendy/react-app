import { SERVER_API } from "./api";
import { axiosJWT } from "../libs/utils/axiosJwt";

export const getData = async (endpoint) => {
  try {
    const response = await axiosJWT.get(`${SERVER_API}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getWhere = async (endpoint, param) => {
  try {
    const response = await axiosJWT.get(`${SERVER_API}/${endpoint}/${param}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data with parameter:", error);
    throw error;
  }
};

export const store = async (endpoint, data) => {
  try {
    const response = await axiosJWT.post(`${SERVER_API}/${endpoint}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error posting form data:", error);
    throw error;
  }
};

export const update = async (endpoint, param, data) => {
  try {
    const response = await axiosJWT.put(
      `${SERVER_API}/${endpoint}/${param}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const destroy = async (endpoint, param) => {
  try {
    const response = await axiosJWT.delete(`${SERVER_API}/${endpoint}/${param}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
