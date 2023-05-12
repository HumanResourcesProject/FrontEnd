import React from 'react'
import HeaderManager from "../../components/header-manager/HeaderManager";
import SidebarManager from "../../components/sidebar-manager/SidebarManager";
import MainPage from "../../components/mainpage/MainPage";
import "./managerMainPage.scss";

const ManagerMainPage = () => {
  return (
    <div className="manager-page">
      <div className="manager-sidebar">
        <SidebarManager />
      </div>
      <div className="manager-right">
        <HeaderManager /> 
        <MainPage/>
      </div>

    </div>
  )
}
export default ManagerMainPage;
