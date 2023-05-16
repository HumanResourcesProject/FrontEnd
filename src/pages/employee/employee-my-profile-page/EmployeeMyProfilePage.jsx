import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeMyProfilePage.scss";
import EmployeeMyProfile from "../../../components/employee-myprofile/EmployeeMyProfile";

const EmployeeMyProfilePage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="employeeprofilepage-right">
        <HeaderEmployee /> 
        <EmployeeMyProfile />
      </div>

    </div>
  );
};

export default EmployeeMyProfilePage;