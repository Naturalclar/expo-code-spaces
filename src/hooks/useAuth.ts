import { useAuthContext } from "@/contexts/AuthContext";
import { useCallback } from "react";

export const useAuth = () => {
  const { setUser } = useAuthContext();
  const login = useCallback(
    (_email: string, _password: string) => {
      setUser({
        name: "test user",
      });
    },
    [setUser],
  );

  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return {
    login,
    logout,
  };
};
