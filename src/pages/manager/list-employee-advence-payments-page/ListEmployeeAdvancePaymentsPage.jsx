import React from 'react'
import "./listEmployeeAdvancePaymentsPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerAdvancePayments from "../../../components/table-manager-list-advance-payments/TableManagerAdvancePayments";
import HeaderManager from '../../../components/header-manager/HeaderManager';

const ListEmployeeAdvancePaymentsPage = () => {
  return (
    <div>
    <div>
      <SidebarManager />
    </div>
    <div className="employee-list-advance-payments-right">
      <HeaderManager />
      <TableManagerAdvancePayments/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeAdvancePaymentsPage;
