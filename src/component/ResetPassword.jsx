import { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMsg("");
    setError("");

  
    if (!password || password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      const data = await resetPassword(token, password);
      setMsg(data.msg);
      setPassword(""); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <h2 className="mb-4 text-xl">Reset Password</h2>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <button className="bg-green-500 text-white p-2 w-full">
          Update Password
        </button>

      
        {msg && <p className="mt-2 text-green-600">{msg}</p>}

        
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </form>
    </div>
  );
}