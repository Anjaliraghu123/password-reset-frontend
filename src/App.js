import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />  
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;