import * as React from "react";
import { AuthRouter } from "./AuthRouter";
import { MainRouter } from "./MainRouter";
import { useAuth } from "@/contexts/AuthContext";

export const RootRouter = () => {
  const { user } = useAuth();

  return user ? <MainRouter /> : <AuthRouter />;
};
