import React from "react";

import { login as loginApi, logout as logoutApi } from "../repository/auth-api";

const localStorageAuthKey = "todo-authed";

type IAuthContextValue = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const initialValue: IAuthContextValue = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const authContext = React.createContext<IAuthContextValue>(initialValue);

const useAuthState = (): IAuthContextValue => {
  const isAuthenticatedBefore = localStorage.getItem(localStorageAuthKey) === "true";
  const [isAuthenticated, setAuthed] = React.useState(isAuthenticatedBefore);

  const login = async () => {
    try {
      await loginApi();
      localStorage.setItem(localStorageAuthKey, "true");
      setAuthed(true);
    } catch (e) {}
    return;
  };
  const logout = async () => {
    try {
      await logoutApi();
      localStorage.removeItem(localStorageAuthKey);
      setAuthed(!isAuthenticated);
    } catch (e) {}
    return;
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

type Props = {};
const AuthProvider: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  const auth = useAuthState();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuthContext = (): IAuthContextValue => {
  return React.useContext(authContext);
};

export { AuthProvider, useAuthContext };
