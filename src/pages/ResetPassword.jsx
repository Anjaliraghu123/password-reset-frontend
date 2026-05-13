import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {

  const { token } = useParams();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
       `https://password-reset-backend-gt25.onrender.com/api/auth/reset-password/${token}`,
        { password }
      );

      alert(res.data.message);

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">

      <div className="col-md-4 mx-auto">

        <h2 className="mb-4">Reset Password</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            placeholder="New Password"
            className="form-control mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-danger w-100">
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
}