import React from "react";
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import "./managerListEmployeePage.scss";
import TableManagerListEmployee from "../../../components/table-manager-list-employee/TableManagerListEmployee"


const ManagerListEmployeePage = () => {
  return (
    <div>
      <div>
      <SidebarManager />
      </div>
      <div className="manager-list-employee-right">
        <HeaderManager />
        <TableManagerListEmployee/>
      </div> 
   
    </div>
  )
}
export default ManagerListEmployeePage;
