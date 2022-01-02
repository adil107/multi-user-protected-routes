import React from "react";
import { Link } from "react-router-dom";

const AdminHome = ({ setRole }) => {
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
        <div>
          <h1>Welcome to Admin </h1>
          <Link to="/admin/about">
            <h1>Admin About</h1>
          </Link>
        </div>
        <button
          onClick={handleLogout}
          style={{ marginTop: "30px", padding: "10px 30px", fontSize: "30px" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
