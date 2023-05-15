import React from "react";
import HeaderManager from "../../components/header-manager/HeaderManager";
import SidebarManager from "../../components/sidebar-manager/SidebarManager";
import "./managerListManagerPage.scss";
import TableManager from "../../components/table-manager/TableManager"

const ManagerListManagerPage = () => {
  return (
    <div className="manager-page">
      <div className="manager-sidebar">
      <SidebarManager />
      </div>
      <div className="manager-right">
        <HeaderManager />
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListManagerPage;
