import React from "react";
import HeaderManager from "../../../components/header/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import "./managerListEmployeePage.scss";
import TableEmployee from "../../../components/table-employee/TableEmployee"

const ManagerListEmployeePage = () => {
  return (
    <div className="manager-page">
      <div className="manager-sidebar">
      <SidebarManager />
      </div>
      <div className="manager-right">
        <HeaderManager />
        <TableEmployee/>
      </div> 
   
    </div>
  )
}
export default ManagerListManagerPage;
