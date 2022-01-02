import React, { useState } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";

import Login from "../page/auth/login";

import AdminAbout from "../page/admin/about";
import AdminHome from "../page/admin/home";

import About from "../page/user/about";
import Home from "../page/user/home";

const Routes = () => {
  const [role, setRole] = useState(
    JSON.parse(localStorage.getItem("role")) || "public"
  );

  return (
    <>
      {(role === "public" || !role) && (
        <Switch>
          <Route path="/login" element={<Login setRole={setRole} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Switch>
      )}
      {role === "admin" && (
        <Switch>
          <Route path="/admin" element={<AdminHome setRole={setRole} />} />
          <Route path="/admin/about" element={<AdminAbout />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Switch>
      )}

      {role === "user" && (
        <Switch>
          <Route path="/user" element={<Home setRole={setRole} />} />
          <Route path="/user/about" element={<About />} />
          <Route path="*" element={<Navigate to="/user" />} />
        </Switch>
      )}
    </>
  );
};

export default Routes;
