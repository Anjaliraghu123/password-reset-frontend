// pages/ResetPassword.jsx
import React, { useState, useEffect } from "react";
import API from "../api";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    API.get(`/auth/verify/${token}`)
      .then(() => setValid(true))
      .catch(() => alert("Invalid or expired link"));
  }, [token]);

  const submit = async () => {
    await API.post(`/auth/reset/${token}`, { password });
    alert("Password updated");
  };

  if (!valid) return <h3>Checking...</h3>;

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <input
        type="password"
        className="form-control my-3"
        placeholder="New Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-success" onClick={submit}>
        Update Password
      </button>
    </div>
  );
}