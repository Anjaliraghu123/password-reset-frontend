import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setForm({ ...form, email: value.trim() });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!form.name || !form.email || !form.password) {
      setMessage("All fields are required");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        "https://password-reset-backend-gt25.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("RESPONSE:", data);

      if (!res.ok) {
        if (res.status === 400) {
          setMessage("User already exists");
        } else {
          setMessage(data.message || "Register failed");
        }
        setLoading(false);
        return;
      }

      
      setMessage("Registered successfully ");

      
      setForm({
        name: "",
        email: "",
        password: ""
      });

    } catch (err) {
      console.log(err);
      setMessage("Server error ");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}