import React from "react";
import Main from "../components/dashboard/Main";
import Header from "../components/dashboard/Main";
import Progress from "../components/dashboard/Progress";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/Navbar";

const dashboard = () => {
  return (
    <div className="grid grid-cols-12 bg-[#f4f1eb]/50">
      <Sidebar />
      <Main />
      <Progress />
    </div>
  );
};

export default dashboard;
