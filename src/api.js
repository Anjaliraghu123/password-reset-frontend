import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-backend-gt25.onrender.com/api",
});

export const forgotPassword = (data) => {
  return API.post("/auth/forgot-password", data);
};

export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

export const registerUser = (data) => {
  return API.post("/auth/register", data);
};

export const resetPassword = (data) => {
  return API.post("/auth/reset-password", data);
};