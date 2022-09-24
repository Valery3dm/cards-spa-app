import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
