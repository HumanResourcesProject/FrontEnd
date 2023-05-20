import React from 'react'
import "./managerRequestsPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import ManagerRequests from '../../../components/manager-requests/ManagerRequests';
import { useState} from "react";

const ManagerRequestsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
    <div>
    {sidebarOpen && <SidebarManager />}
    </div>
    <div className="manager-requests-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
      <HeaderManager onToggleSidebar={handleToggleSidebar}/>
      <ManagerRequests/>
    </div> 
 
  </div>
  )
}

export default ManagerRequestsPage;
