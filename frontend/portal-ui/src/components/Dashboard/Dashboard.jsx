import React from "react";
import { Link } from "react-router-dom";
import { exams } from "../../data/exams";
import "./Dashboard.css";

const Dashboard = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2>Welcome, {loggedInUser?.username}</h2>
        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
      <div className="main-content">
        <div className="dashboard-section">
          <p>This is your dashboard.</p>
        </div>
        <div className="exams-section">
          <h3>Available Exams</h3>
          <ul className="exams-list">
            {exams
              .filter((exam) => exam.allowedUsers.includes(loggedInUser.id))
              .map((exam) => (
                <li key={exam.id} className="exam-card">
                  <Link to={`/exam/${exam.id}`} className="exam-link">
                    {exam.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
