import React from 'react'
import "./listEmployeeExpensesPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerExpenses from "../../../components/table-manager-list-expenses/TableManagerExpenses";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import { useState} from "react";

const ListEmployeeExpensesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
    <div>
    {sidebarOpen && <SidebarManager />}
    </div>
    <div className="employee-list-expenses-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
      <HeaderManager onToggleSidebar={handleToggleSidebar}/>
      <TableManagerExpenses/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeExpensesPage;