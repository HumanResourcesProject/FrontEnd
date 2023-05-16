import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeUpdatePage.scss";
import EmployeeUpdateProfile from "../../../components/employee-update-profile/EmployeeUpdateProfile";

const EmployeeUpdatePage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="employeeupdatepage-right">
        <HeaderEmployee /> 
        <EmployeeUpdateProfile />
      </div>

    </div>
  );
};

export default EmployeeUpdatePage;