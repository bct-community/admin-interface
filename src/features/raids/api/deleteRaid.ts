import { useMutation } from "@tanstack/react-query";

import env from "@/config";

const deleteRaid = async (raidId: string) => {
  const response = await fetch(`${env.VITE_API_URL}/raids/${raidId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao remover Raid.");
  }
};

export const useDeleteRaid = () => {
  return useMutation({
    mutationFn: (raidId: string) => deleteRaid(raidId),
  });
};
