import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "https://password-reset-backend-gt25.onrender.com/api/auth/forgot-password",
        { email }
      );

      alert(res.data.message);

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">

      <div className="col-md-4 mx-auto">

        <h2 className="mb-4">Forgot Password</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-warning w-100">
            Send Reset Link
          </button>

        </form>

      </div>
    </div>
  );
}