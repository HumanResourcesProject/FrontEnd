import React from "react";
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import "./managerListEmployeePage.scss";
import TableManagerListEmployee from "../../../components/table-manager-list-employee/TableManagerListEmployee"
import { useState} from "react";

const ManagerListEmployeePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
      {sidebarOpen && <SidebarManager />}
      </div>
      <div className="manager-list-employee-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <HeaderManager onToggleSidebar={handleToggleSidebar}/>
        <TableManagerListEmployee/>
      </div> 
   
    </div>
  )
}
export default ManagerListEmployeePage;
