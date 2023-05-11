import React from "react";
import Header from "../../components/header/Header";
import SidebarManager from "../../components/sidebar-manager/SidebarManager";
import "./managerListManagerPage.scss";
import TableManager from "../../components/table-manager/TableManager"

const ManagerListManagerPage = () => {
  return (
    <div>
      <div>
      <SidebarManager />
      </div>
      <div className="admin-right">
        <Header />
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListManagerPage;
