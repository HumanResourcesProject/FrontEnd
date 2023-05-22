import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./managerListPage.scss";
import TableManager from "../../../components/table-manager/TableManager";
import Header from "../../../components/header/Header";
import { useState} from "react";

const ManagerListPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div  className="manager-page">
      <div className="manager-sidebar">
      {sidebarOpen && <Sidebar />}
      </div>
      <div className="manager-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <Header onToggleSidebar={handleToggleSidebar} />
        <TableManager/>
      </div> 
   
    </div>
  )
}
export default ManagerListPage
