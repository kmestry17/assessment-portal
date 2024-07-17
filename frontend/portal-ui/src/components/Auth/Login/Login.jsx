import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../../data/users";
import "./Login.css"; // Import the CSS file

const Login = ({ onLoginSuccess }) => {
  // useState is a hook that allows you to have state variables in functional components
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useNavigate is a hook that gives you access to the history instance
  const navigate = useNavigate();

  // handleLogin is a function that is called when the form is submitted

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // find the user in the users array
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // if the user is found, set the user in local storage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      onLoginSuccess(); // Call the prop function to update the login status
      console.log("Login successful");
      navigate("/dashboard"); // Redirect the user to the dashboard
    } else {
      console.log("Login failed. Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="auth-form-container">
        <form className="auth-form" onSubmit={handleLogin}>
          <h2 className="text-center mb-4">Log in to Your Account</h2>
          <div className="form-group">
            <label htmlFor="usr">Email</label>
            <input
              id="usr"
              className="form-control"
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="pwd">Password</label>
            <input
              id="pwd"
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </div>
          <div className="text-center mt-3">
            <a href="#" className="link">
              Reset password
            </a>
          </div>
          <div className="text-center mt-2">
            <p>
              Don't have an account?{" "}
              <a href="#" className="link">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
