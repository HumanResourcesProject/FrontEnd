import React from 'react'
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import MainPage from "../../../components/mainpage/MainPage";
import "./managerMainPage.scss";
import { useState} from "react";

const ManagerMainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="manager-page">
      <div className="manager-sidebar">
      {sidebarOpen && <SidebarManager />}
      </div>
      <div className="manager-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderManager onToggleSidebar={handleToggleSidebar}/> 
        <MainPage/>
      </div>

    </div>
  )
}
export default ManagerMainPage;
