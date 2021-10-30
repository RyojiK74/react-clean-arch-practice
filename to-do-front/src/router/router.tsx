import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import { AuthProvider } from "../hooks/authContext";
import { ProtectedRoute } from "./protectedRoute";
import Dashboard from "../components/page/dashboard";
import Login from "../components/page/login";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="/app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
