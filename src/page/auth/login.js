import React, { useState } from "react";

const Login = ({ setRole }) => {
  const [selectRole, setSelectRole] = useState("");

  const handleLogin = () => {
    if (selectRole) {
      localStorage.setItem("role", JSON.stringify(selectRole));
      setRole(selectRole);
    } else {
      alert("please select Role");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form style={{ width: "500px" }}>
        <h1 style={{ marginBottom: "10px" }}>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            style={{ width: "100%", padding: "10px" }}
          />
        </div>
        <div>
          <select
            value={selectRole}
            onChange={(e) => setSelectRole(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "20px 0" }}
          >
            <option value="">select role</option>
            <option value="admin">Admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <div style={{ textAlign: "right" }}>
          <button style={{ padding: "5px 30px" }} onClick={handleLogin}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
