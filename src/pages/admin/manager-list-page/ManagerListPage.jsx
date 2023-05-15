import React from "react";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import "./managerListPage.scss";
import TableManager from "../../../components/table-manager/TableManager";
import HeaderManager from "../../../components/header-manager/HeaderManager";

const ManagerListPage = () => {
  return (
    <div  className="manager-page">
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
export default ManagerListPage
