import * as React from "react";
import { AuthRouter } from "./AuthRouter";
import { MainRouter } from "./MainRouter";

export const RootRouter = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <MainRouter /> : <AuthRouter />;
};
