import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage"; // Make sure to import the DashboardPage component

function App() {
  // Flag to check if the user is logged in
  const isLoggedIn = !!localStorage.getItem("loggedInUser");

  return (
    <>
      <Router>
        <nav>
          {!isLoggedIn && <Link to="/">Home</Link>}
          {!isLoggedIn && <Link to="/login">Login</Link>}
          {!isLoggedIn && <Link to="/register">Register</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={
              isLoggedIn ? <Navigate to="/dashboard" /> : <RegisterPage />
            }
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
          />
          {/* Redirect any unknown paths to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
