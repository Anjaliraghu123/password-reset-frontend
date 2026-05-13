import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "https://password-reset-backend-gt25.onrender.com/api/auth/register",
        form
      );

      alert("Registration Successful");

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">

      <div className="col-md-4 mx-auto">

        <h2 className="mb-4">Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <div className="mt-3">

          <Link to="/">
            Already have an account?
          </Link>

        </div>

      </div>
    </div>
  );
}