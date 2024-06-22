import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <h1 className="flex">
        <Sidebar />
        <Outlet />
      </h1>
    </div>
  );
};

export default Body;
