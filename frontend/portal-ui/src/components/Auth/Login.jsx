import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // useState is a hook that allows you to have state variables in functional components
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useNavigate is a hook that gives you access to the history instance
  const navigate = useNavigate();

  // handleLogin is a function that is called when the form is submitted

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // find the user in the users array
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // if the user is found, set the user in local storage
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      console.log("Login successful");

      // redirect to the dashboard
      navigate("/dashboard");
    } else {
      console.log("Login failed. Invalid credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
