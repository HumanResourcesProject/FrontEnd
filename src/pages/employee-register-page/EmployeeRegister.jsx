import React from 'react'
import "./employeeRegister.scss";
import Header from "../../components/header/Header";
import SidebarManager from "../../components/sidebar-manager/SidebarManager";
import CreateEmployee from "../../components/create-employee/CreateEmployee";

const EmployeeRegister = () => {
  return (
    <div className="admin-page">
    <div className="admin_sidebar">
      <SidebarManager />
    </div>
    <div className="admin-right">
      <Header />
      <CreateEmployee/>
    </div> 
 
  </div>
  )
}

export default EmployeeRegister
