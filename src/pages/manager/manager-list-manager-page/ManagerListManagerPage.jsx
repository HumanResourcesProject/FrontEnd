import React from "react";
import "./managerListManagerPage.scss";
import TableManager from "../../../components/table-manager/TableManager";
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import { useState} from "react";

const ManagerListManagerPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div  className="manager-page">
      <div className="manager-sidebar">
      {sidebarOpen && <SidebarManager />}
      </div>
      <div style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <HeaderManager onToggleSidebar={handleToggleSidebar}/>
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListManagerPage;
