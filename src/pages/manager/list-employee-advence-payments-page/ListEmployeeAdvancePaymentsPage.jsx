import React from 'react'
import "./listEmployeeAdvancePaymentsPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerAdvancePayments from "../../../components/table-manager-list-advance-payments/TableManagerAdvancePayments";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import { useState} from "react";

const ListEmployeeAdvancePaymentsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
    <div>
    {sidebarOpen && <SidebarManager />}
    </div>
    <div className="employee-list-advance-payments-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
      <HeaderManager onToggleSidebar={handleToggleSidebar}/>
      <TableManagerAdvancePayments/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeAdvancePaymentsPage;
