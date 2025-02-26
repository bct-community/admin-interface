import { useMutation } from "@tanstack/react-query";

import env from "@/config";

import { Raid, RaidSchema } from "./getRaids";

const updateRaid = async (raid: Raid) => {
  const { _id, ...updatedRaid } = RaidSchema.parse(raid);

  const response = await fetch(`${env.VITE_API_URL}/raids/${_id}`, {
    method: "PUT",
    body: JSON.stringify(updatedRaid),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar Raid.");
  }
};

export const useUpdateRaid = () => {
  return useMutation({
    mutationFn: (raid: Raid) => updateRaid(raid),
  });
};
