import { SERVER_API } from "./api";

export const getData = async (endpoint) => {
  return SERVER_API(`/${endpoint}`);
};

export const getWhere = async (endpoint, param) => {
  return SERVER_API(`/${endpoint}/${param}`);
};

export const store = async (endpoint, data) => {
  return SERVER_API(`/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const update = async (endpoint, param, data) => {
  return SERVER_API(`/${endpoint}/${param}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const destroy = async (endpoint, param) => {
  return SERVER_API(`/${endpoint}/${param}`, {
    method: "DELETE",
  });
};
