import { useState, useEffect } from "react";
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
import ExamPage from "./pages/ExamPage"; // Import ExamPage

function App() {
  // State to check if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("loggedInUser")
  );

  // Function to update the login status
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Check if the user is logged in when the app loads
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("loggedInUser"));
  }, []);

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {!isLoggedIn && <Link to="/login">Login</Link>}
          {!isLoggedIn && <Link to="/register">Register</Link>}
          {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
              )
            }
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
          <Route
            path="/exam/:examId"
            element={isLoggedIn ? <ExamPage /> : <Navigate to="/login" />}
          />
          {/* Redirect any unknown paths to the home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
