import React from 'react'
import "./listEmployeeLeavesPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerLeaves from "../../../components/table-manager-list-leaves/TableManagerLeaves";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import { useState} from "react";

const ListEmployeeLeavesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
    <div>
    {sidebarOpen && <SidebarManager />}
    </div>
    <div className="employee-list-leaves-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
      <HeaderManager onToggleSidebar={handleToggleSidebar}/>
      <TableManagerLeaves/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeLeavesPage;
