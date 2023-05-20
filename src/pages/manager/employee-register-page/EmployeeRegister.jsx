import React from 'react'
import "./employeeRegister.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import CreateEmployee from "../../../components/create-employee/CreateEmployee";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import { useState} from "react";

const EmployeeRegister = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
    <div>
    {sidebarOpen && <SidebarManager />}
    </div>
    <div className="employee-register-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
      <HeaderManager onToggleSidebar={handleToggleSidebar}/>
      <CreateEmployee/>
    </div> 
 
  </div>
  )
}

export default EmployeeRegister
