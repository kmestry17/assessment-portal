import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
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
  );
};

export default Dashboard;
