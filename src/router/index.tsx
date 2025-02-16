import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "@/components";
import { ProtectedRoute } from "@/components";
import { Arts, Links, Login, Raids } from "@/features";
import { AuthProvider } from "@/providers/auth";

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/raids"
            element={<ProtectedRoute element={<Raids />} />}
          />
          <Route
            path="/links"
            element={<ProtectedRoute element={<Links />} />}
          />
          <Route path="/arts" element={<ProtectedRoute element={<Arts />} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
