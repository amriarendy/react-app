import { SERVER_API } from "./api";

export const getData = async () => {
  return SERVER_API("/users");
};

export const getWhere = async (userId) => {
  return SERVER_API(`/users/${userId}`);
};

export const store = async (userData) => {
  return SERVER_API("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const update = async (userId, userData) => {
  return SERVER_API(`/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const destroy = async (userId) => {
  return SERVER_API(`/users/${userId}`, {
    method: "DELETE",
  });
};
