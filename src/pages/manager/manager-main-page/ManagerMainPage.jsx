import React from 'react'
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import MainPage from "../../../components/manager-mainpage/ManagerMain";
import "./managerMainPage.scss";
import { useState} from "react";

const ManagerMainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div >
      <div >
      {sidebarOpen && <SidebarManager />}
      </div>
      <div style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <HeaderManager onToggleSidebar={handleToggleSidebar}/> 
        <MainPage/>
      </div>

    </div>
  )
}
export default ManagerMainPage;
