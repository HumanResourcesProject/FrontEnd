import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeAddLeave.scss";
import EmployeeAddLeave from "../../../components/employee-add-leave/EmployeeAddLeave";

const EmployeeAddLeavePage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="employee-add-leave-right">
        <HeaderEmployee /> 
        <EmployeeAddLeave />
      </div>

    </div>
  );
};

export default EmployeeAddLeavePage;