import React from 'react'
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import ManagerUpdateProfile from "../../../components/manager-update-profile/ManagerUpdateProfile";
import "./managerUpdateProfilePage.scss";

const ManagerMainPage = () => {
  return (
    <div className="managerpage">
      <div className="manager-sidebar">
        <SidebarManager />
      </div>
      <div className="manager-right">
        <HeaderManager /> 
        <ManagerUpdateProfile/>
      </div>

    </div>
  )
}
export default ManagerMainPage;
