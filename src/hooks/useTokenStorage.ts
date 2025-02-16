import { useLocalStorage } from "./useLocalStorage";

export const useTokenStorage = () => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null,
  );

  const saveAccessToken = (newAccessToken: string) =>
    setAccessToken(newAccessToken);

  const clearAccessToken = () => setAccessToken(null);

  return {
    accessToken,
    saveAccessToken,
    clearAccessToken,
  };
};
