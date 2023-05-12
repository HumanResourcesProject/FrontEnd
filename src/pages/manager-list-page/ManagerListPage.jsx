import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./managerListPage.scss";
import TableManager from "../../components/table-manager/TableManager";

const ManagerListPage = () => {
  return (
    <div  className="manager-page">
      <div className="manager-sidebar">
        <Sidebar />
      </div>
      <div className="manager-right">
        <Header />
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListPage
