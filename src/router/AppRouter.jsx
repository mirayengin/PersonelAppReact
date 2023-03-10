import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Department from "../pages/Department";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route path=":id" element={<Department />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
