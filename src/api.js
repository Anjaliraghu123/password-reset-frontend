import axios from "axios";

const API_URL = "https://password-reset-backend-gt25.onrender.com/api/auth";

export const registerUser = (data) => axios.post(`${API_URL}/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/login`, data);
export const forgotPassword = (data) => axios.post(`${API_URL}/forgot`, data);
export const resetPassword = (token, data) => axios.post(`${API_URL}/reset/${token}`, data);