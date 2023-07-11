import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import PasswordLayout from "layouts/auth/forget_password_layout";
import ResetPasswordLayout from "layouts/auth/reset_password_layout";
import ProtectedRoute from "helpers/protected_routes";
import Home from "layouts/home";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
      <Route path="/" element={<Home />} />
      <Route path="/password_reset" element={<PasswordLayout />} />
      <Route path="/password_resets/:token" element={<ResetPasswordLayout />} />
    </Routes>
  );
};

export default App;
