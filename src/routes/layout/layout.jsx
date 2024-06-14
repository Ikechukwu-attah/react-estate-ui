import React, { useContext } from "react";
import "./layouts.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";

const Layout = () => {
  return (
    <div className="Layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const RequiredAuth = () => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    <Navigate to={"/login"} />
  ) : (
    <div className="Layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout, RequiredAuth };
