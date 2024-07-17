import React from "react";
import Login from "../components/Auth/Login/Login";

const LoginPage = ({ onLoginSuccess }) => {
  return (
    <div>
      <h1>Login</h1>
      <Login onLoginSuccess={onLoginSuccess} />
    </div>
  );
};

export default LoginPage;
