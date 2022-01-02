import React from "react";
import { Link } from "react-router-dom";

const AdminAbout = () => {
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
        <h1>Welcome to Admin</h1>
        <h2 style={{ margin: "20px 0" }}>This is Admin About Page</h2>
        <Link to="/admin">
          <h1>Admin Home</h1>
        </Link>
      </div>
    </div>
  );
};

export default AdminAbout;
