import React from 'react'
import "./listEmployeeExpensesPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerExpenses from "../../../components/table-manager-list-expenses/TableManagerExpenses";
import HeaderManager from '../../../components/header-manager/HeaderManager';

const ListEmployeeExpensesPage = () => {
  return (
    <div>
    <div>
      <SidebarManager />
    </div>
    <div className="employee-list-expenses-right">
      <HeaderManager />
      <TableManagerExpenses/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeExpensesPage;