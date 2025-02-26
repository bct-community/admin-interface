import { useMutation } from "@tanstack/react-query";

import env from "@/config";

import { Raid } from "./getRaids";

const registerRaid = async (raid: Omit<Raid, "_id">) => {
  const response = await fetch(`${env.VITE_API_URL}/raids`, {
    method: "POST",
    body: JSON.stringify(raid),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao criar novo Raid.");
  }
};

export const useRegisterRaid = () => {
  return useMutation({
    mutationFn: (raid: Omit<Raid, "_id">) => registerRaid(raid),
  });
};
