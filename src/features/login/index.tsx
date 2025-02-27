import {
  EyeIcon,
  EyeOffIcon,
  Shield,
  ShieldCheck,
  ShieldX,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTokenStorage } from "@/hooks/useTokenStorage";
import { useAuth } from "@/providers/auth";

import { useLogin } from "./api/useLogin";

const Login = () => {
  const [auth, setAuth] = useState({ email: "", password: "" });

  const { user } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isError, isSuccess, isPending, data } = useLogin();
  const { saveAccessToken } = useTokenStorage();
  const navigate = useNavigate();

  if (isSuccess) {
    saveAccessToken(data.token);
    navigate("/raids");
  }

  const submitCredentials = () => {
    mutate(auth);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  if (user) {
    navigate("/raids");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed top-8">
        <Shield className="size-6" />
      </div>

      <div className="flex w-[350px] flex-col gap-4">
        <div className="grid gap-2">
          <Input
            id="email"
            type="email"
            placeholder="E-mail"
            required
            className="rounded-xl"
            onChange={handleInputChange}
          />

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="pr-10 hide-password-toggle rounded-xl"
              placeholder="Senha"
              onChange={handleInputChange}
            />

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeIcon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <EyeOffIcon className="w-4 h-4" aria-hidden="true" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>

          {isError && (
            <div className="flex items-center gap-1 px-2 text-red-600 select-none">
              <ShieldX size={15} />
              <Label className="text-xs">Credenciais inválidas</Label>
            </div>
          )}

          {isSuccess && (
            <div className="flex items-center gap-1 px-2 text-green-600 select-none">
              <ShieldCheck size={15} />
              <Label className="text-xs">Autenticado</Label>
            </div>
          )}

          {isPending && (
            <div className="px-2">
              <div className="progress-bar" />
            </div>
          )}
        </div>

        <Button
          onClick={submitCredentials}
          className="w-full select-none rounded-xl"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
