import { useState } from "react";
import { forgotPassword } from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!email) {
      setMsg("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setMsg("Enter valid email");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const data = await forgotPassword(email.trim().toLowerCase());

      setMsg(data.msg || "Reset link sent to your email ");
    } catch (err) {
      console.log(err);
      setMsg(err.message || "Something went wrong ");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow rounded w-full max-w-md"
      >
        <h2 className="mb-4 text-xl font-bold text-center">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full mb-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {msg && (
          <p className="mt-4 text-center text-red-500">
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}