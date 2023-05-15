import React from 'react'
import "./employeeRegister.scss";
import HeaderManager from "../../components/header-manager/HeaderManager";
import SidebarManager from "../../components/sidebar-manager/SidebarManager";
import CreateEmployee from "../../components/create-employee/CreateEmployee";

const EmployeeRegister = () => {
  return (
    <div className="admin-page">
    <div className="admin_sidebar">
      <SidebarManager />
    </div>
    <div className="admin-right">
      <HeaderManager />
      <CreateEmployee/>
    </div> 
 
  </div>
  )
}

export default EmployeeRegister
