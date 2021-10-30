import React from "react";

import { useAuthContext } from "../../hooks/authContext";

const Dashboard: React.FC = () => {
  const { isAuthenticated, logout } = useAuthContext();
  return (
    <div>
      {isAuthenticated ? "Logged in" : "Logged out"}
      PROTECTED <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
