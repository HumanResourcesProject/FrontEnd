import React from 'react'
import "./listEmployeeLeavesPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerLeaves from "../../../components/table-manager-list-leaves/TableManagerLeaves";
import HeaderManager from '../../../components/header-manager/HeaderManager';

const ListEmployeeLeavesPage = () => {
  return (
    <div>
    <div>
      <SidebarManager />
    </div>
    <div className="employee-list-leaves-right">
      <HeaderManager />
      <TableManagerLeaves/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeLeavesPage;
