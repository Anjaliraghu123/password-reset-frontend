import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "email" ? value.trim() : value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!form.email || !form.password) {
      setMessage("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        "https://password-reset-backend-gt25.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {                       
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
      email: form.email,     
      password: form.password
    })
        }
      );

      
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      console.log("STATUS:", res.status);
      console.log("RESPONSE:", data);

      
      if (!res.ok) {
        if (res.status === 400) {
          setMessage("Invalid email or password");
        } else if (res.status === 404) {
          setMessage("User not found");
        } else {
          setMessage(data.msg || "Login failed");
        }
        setLoading(false);
        return;
      }

      
      localStorage.setItem("token", data.token);
      setMessage("Login successful ");

      
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (err) {
      console.log(err);
      setMessage("Server error ");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* links */}
        <div className="mt-4 text-center space-y-2">
          <p>
            <Link to="/forgot-password" className="text-blue-500">
              Forgot Password?
            </Link>
          </p>

          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>

        {/* message */}
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("successful")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}