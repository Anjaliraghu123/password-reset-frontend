import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/Forgot Password";
import ResetPassword from "./pages/Reset Password";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;