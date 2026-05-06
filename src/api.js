import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-backend-gt25.onrender.com/api/auth",
  headers: {
    "Content-Type": "application/json"
  }
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const forgotPassword = (email) =>
  API.post("/forgot-password", { email });
export const resetPassword = (token, password) =>
  API.post(`/reset-password/${token}`, { password });