import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeListLeavePage.scss";
import TableStaffLeave from "../../../components/table-employee-staff-leave/TableStaffLeave";

const EmployeListLeavePage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="tablestaffleave-right">
        <HeaderEmployee /> 
        <TableStaffLeave />
      </div>

    </div>
  );
};

export default EmployeListLeavePage;