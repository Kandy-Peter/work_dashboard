import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import PasswordLayout from "layouts/auth/forget_password_layout";
import ResetPasswordLayout from "layouts/auth/reset_password_layout";


axios.defaults.baseURL = 'http://127.0.0.1:4000/api/v1';

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/password_reset" element={<PasswordLayout />} />
      <Route path="/password_reset/:token" element={<ResetPasswordLayout />} />
    </Routes>
  );
};

export default App;
