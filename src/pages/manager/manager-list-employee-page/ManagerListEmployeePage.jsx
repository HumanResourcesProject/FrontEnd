import React from "react";
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import "./managerListEmployeePage.scss";
import TableEmployee from "../../../components/table-employee/TableEmployee"

const ManagerListEmployeePage = () => {
  return (
    <div>
      <div>
      <SidebarManager />
      </div>
      <div className="manager-list-employee-right">
        <HeaderManager />
        <TableEmployee/>
      </div> 
   
    </div>
  )
}
export default ManagerListEmployeePage;
