import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeAddLeave.scss";
import EmployeeAddLeave from "../../../components/employee-add-leave/EmployeeAddLeave";
import { useState} from "react";

const EmployeeAddLeavePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="employee-add-leave-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar} /> 
        <EmployeeAddLeave />
      </div>

    </div>
  );
};

export default EmployeeAddLeavePage;