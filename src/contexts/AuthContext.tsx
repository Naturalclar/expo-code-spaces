import * as React from "react";
import type { User } from "@/types";

type AuthContext = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AuthContext = React.createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const useAuth = () => {
  const { user, setUser } = React.useContext(AuthContext);
  return { user, setUser };
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
