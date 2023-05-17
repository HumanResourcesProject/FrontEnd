import React from 'react'
import HeaderManager from "../../../components/header-manager/HeaderManager";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import ManagerMyProfile from "../../../components/manager-myprofile/ManagerMyProfile";
import "./managerMyProfilePage.scss";

const ManagerMyProfilePage = () => {
  return (
    <div className="managerpage">
      <div className="manager-sidebar">
        <SidebarManager />
      </div>
      <div className="manager-right">
        <HeaderManager /> 
        <ManagerMyProfile/>
      </div>

    </div>
  )
}
export default ManagerMyProfilePage;
