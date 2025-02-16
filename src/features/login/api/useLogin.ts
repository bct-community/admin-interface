import { useMutation } from "@tanstack/react-query";

import env from "@/config";

const fetchLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  await fetch(env.VITE_API_URL + "/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => fetchLogin({ email, password }),
  });
};
