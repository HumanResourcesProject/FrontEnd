import React from 'react'
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeExpensePage.scss";
import EmployeeExpense from '../../../components/employee-expense/EmployeeExpense';
import { useState} from "react";

const EmployeeExpensePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="tablestaffleave-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar}/> 
        <EmployeeExpense />
      </div>

    </div>
  )
}
export default EmployeeExpensePage
