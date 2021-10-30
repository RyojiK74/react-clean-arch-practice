import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useAuthContext } from "../../hooks/authContext";

const Login: React.FC = () => {
  const { isAuthenticated, login } = useAuthContext();
  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <>
      {isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          LOGIN <button onClick={login}>LOGIN</button>
        </div>
      )}
    </>
  );
};

export default Login;
