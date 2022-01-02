import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to User</h1>
        <h2 style={{ margin: "20px 0" }}>This is User About Page</h2>
        <Link to="/user">
          <h1>Dashboard</h1>
        </Link>
      </div>
    </div>
  );
};

export default About;
