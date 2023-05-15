import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeLeavePage.scss";
import MainEmployee from "../../../components/main-employee/MainEmployee";

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="mainpage_sidebar">
        <SidebarEmployee />
      </div>
      <div className="mainpage-right">
        <HeaderEmployee /> 
        <MainEmployee />
      </div>

    </div>
  );
};

export default MainPage;