import React from "react";

import { loginInputType } from "../usecase/auth/loginInputType";
import { loginUseCase } from "../usecase/auth/authUseCase";
import { logout as logoutApi } from "../repository/auth-api";

const localStorageAuthKey = "todo-authed";

type IAuthContextValue = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
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

  const login = async (email: string, password: string) => {
    try {
      const loginForm: loginInputType = {
        email,
        password,
      };
      await loginUseCase(loginForm);
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
