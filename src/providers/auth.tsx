import { JwtPayload, jwtDecode } from "jwt-decode";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { useTokenStorage } from "@/hooks/useTokenStorage";

type AccessTokenType = JwtPayload & {
  id: string;
  username: string;
};

interface AuthContextType {
  user: AccessTokenType | null;
  isAccessTokenExpired: boolean;
  saveAccessToken: (accessToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const decodeAccessToken = (token: string): AccessTokenType | null => {
  try {
    return jwtDecode<AccessTokenType>(token);
  } catch (error) {
    console.error("Failed to decode access token:", error);
    localStorage.removeItem("access_token");
    return null;
  }
};

export const getAccessToken = () => localStorage.getItem("access_token");

export const isAccessTokenExpiredSync = () => {
  const accessToken = getAccessToken();

  if (!accessToken) return true;

  const accessTokenDecoded = decodeAccessToken(accessToken);

  const isExpired = accessTokenDecoded?.exp
    ? Date.now() > accessTokenDecoded.exp * 1000
    : true;

  return isExpired;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { accessToken, clearAccessToken, saveAccessToken } = useTokenStorage();

  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [accessToken]);

  const user = useMemo(() => {
    return isLogged && accessToken ? decodeAccessToken(accessToken) : null;
  }, [accessToken, isLogged]);

  const logout = () => {
    setIsLogged(false);
    clearAccessToken();
    localStorage.removeItem("access_token");
    navigate("/");
  };

  const isAccessTokenExpired = user?.exp ? Date.now() > user.exp * 1000 : true;

  const value: AuthContextType = useMemo(
    () => ({
      user,
      isAccessTokenExpired,
      saveAccessToken,
      logout,
    }),
    [user, isAccessTokenExpired],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
