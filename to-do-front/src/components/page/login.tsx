import { Input } from "../ui/Input/Input";

import { Redirect } from "react-router-dom";
import React from "react";

import { useAuthContext } from "../../hooks/authContext";
import { useInput } from "../../hooks/inputHook";

const Login: React.FC = () => {
  const { isAuthenticated, login } = useAuthContext();
  const onClickLogin = async () => {
    await login(email.value, password.value);
  };
  const email = useInput("");
  const password = useInput("");

  return (
    <>
      {isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          LOGIN <button onClick={onClickLogin}>LOGIN</button>
          <div>
            <label htmlFor="email">email</label>
            <Input type="text" autoComplete={true} {...email} />
            <label htmlFor="password">password</label>
            <Input type="password" autoComplete={false} {...password} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
