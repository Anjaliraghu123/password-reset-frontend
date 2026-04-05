// pages/ForgotPassword.jsx
import React, { useState } from "react";
import API from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    try {
      await API.post("/auth/forgot", { email });
      alert("Email sent!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>
      <input
        className="form-control my-3"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" onClick={submit}>
        Send Reset Link
      </button>
    </div>
  );
}