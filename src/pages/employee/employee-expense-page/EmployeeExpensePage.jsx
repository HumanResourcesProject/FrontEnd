import React from 'react'
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeExpensePage.scss";
import EmployeeExpense from '../../../components/employee-expense/EmployeeExpense';


const EmployeeExpensePage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="tablestaffleave-right">
        <HeaderEmployee /> 
        <EmployeeExpense />
      </div>

    </div>
  )
}
export default EmployeeExpensePage
