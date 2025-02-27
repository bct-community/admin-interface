import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { isAccessTokenExpiredSync, useAuth } from "@/providers/auth";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user, isAccessTokenExpired, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const isExpired = isAccessTokenExpiredSync();

    const checkToken = async () => {
      if (isAccessTokenExpired || isExpired) {
        await logout();
      }

      setIsLoading(false);
    };

    checkToken();
  }, [isAccessTokenExpired, pathname]);

  if (isLoading) {
    return "loading...";
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;
