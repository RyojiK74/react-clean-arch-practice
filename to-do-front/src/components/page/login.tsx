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
            <input id="email" {...email} />
            <label htmlFor="password">password</label>
            <input id="password" type="password" autoComplete="off" {...password} />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
