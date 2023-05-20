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
      <div className="manager-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderManager onToggleSidebar={handleToggleSidebar}/>
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListManagerPage;
