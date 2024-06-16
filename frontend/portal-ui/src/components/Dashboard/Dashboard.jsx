import React from "react";
import { Link } from "react-router-dom";
import { exams } from "../../data/exams";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <>
      <div>
        <h2>Welcome, {user?.username}</h2>
        <p>This is your dashboard.</p>
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
      <div>
        <h3>Available Exams</h3>
        <ul>
          {exams.map((exam) => (
            <li key={exam.id}>
              <Link to={`/exam/${exam.id}`}>{exam.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
