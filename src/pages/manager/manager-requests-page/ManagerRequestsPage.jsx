import React from 'react'
import "./managerRequestsPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import ManagerRequests from '../../../components/manager-requests/ManagerRequests';

const ManagerRequestsPage = () => {
  return (
    <div>
    <div>
      <SidebarManager />
    </div>
    <div className="manager-requests-right">
      <HeaderManager />
      <ManagerRequests/>
    </div> 
 
  </div>
  )
}

export default ManagerRequestsPage;
