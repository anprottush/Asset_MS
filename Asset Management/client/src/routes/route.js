import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/dashboard.component";
import Login from "../components/auth/login/login.component";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
