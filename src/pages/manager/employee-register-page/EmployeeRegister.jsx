import React from 'react'
import "./employeeRegister.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import CreateEmployee from "../../../components/create-employee/CreateEmployee";
import HeaderManager from '../../../components/header-manager/HeaderManager';

const EmployeeRegister = () => {
  return (
    <div>
    <div>
      <SidebarManager />
    </div>
    <div className="employee-register-right">
      <HeaderManager />
      <CreateEmployee/>
    </div> 
 
  </div>
  )
}

export default EmployeeRegister
