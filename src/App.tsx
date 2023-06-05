import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import PasswordLayout from "layouts/auth/forget_password_layout";
import ResetPasswordLayout from "layouts/auth/reset_password_layout";
import ProtectedRoute from "helpers/protected_routes";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
      <Route path="rtl/*" element={<ProtectedRoute><RtlLayout /></ProtectedRoute>} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/password_reset" element={<PasswordLayout />} />
      <Route path="/password_resets/:token" element={<ResetPasswordLayout />} />
    </Routes>
  );
};

export default App;
