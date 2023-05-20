import React from 'react'
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import ManagerMyProfile from "../../../components/manager-myprofile/ManagerMyProfile";
import "./managerMyProfilePage.scss";
import { useState} from "react";

const ManagerMyProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="managerpage">
      <div className="manager-sidebar">
      {sidebarOpen && <SidebarManager />}
      </div>
      <div className="manager-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderManager onToggleSidebar={handleToggleSidebar}/> 
        <ManagerMyProfile/>
      </div>

    </div>
  )
}
export default ManagerMyProfilePage;
