import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Home from "../components/pages/Home"
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
       
      </Route>

      <Route element={<AuthRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
     
      </Route>
    </Routes>
  );
};

export default AppRoutes;