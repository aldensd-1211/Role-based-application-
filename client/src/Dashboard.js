import React from "react";
import "./styles.css";

function Dashboard({ role }) {
  return (
    <div className="container">
      <h1>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
      <p>Welcome to the {role} dashboard.</p>
    </div>
  );
}

export default Dashboard;
