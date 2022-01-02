import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setRole }) => {
  const handleLogout = () => {
    localStorage.setItem("role", JSON.stringify("public"));
    setRole("public");
  };
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
        <h2 style={{ margin: "20px 0" }}>This is User Dashboard Page</h2>
        <Link to="/user/about">
          <h1 style={{ marginBottom: "20px" }}>About</h1>
        </Link>

        <button style={{ padding: "8px 30px" }} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
