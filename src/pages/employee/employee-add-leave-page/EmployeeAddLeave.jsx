import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeAddLeave.scss";
import MainEmployee from "../../../components/main-employee/MainEmployee";

const MainPage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="employee-add-leave-right">
        <HeaderEmployee /> 
        <MainEmployee />
      </div>

    </div>
  );
};

export default MainPage;