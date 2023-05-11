import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./managerListPage.scss";
import TableManager from "../../components/table-manager/TableManager";

const ManagerListPage = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="admin-right">
        <Header />
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListPage
