import React from 'react'
import Header from "../../components/header/Header";
import SidebarManager from "../../components/sidebar-manager/SidebarManager";
import MainPage from "../../components/mainpage/MainPage";
import "./managerMainPage.scss";

const ManagerMainPage = () => {
  return (
    <div className="managerpage">
      <div className="manager-sidebar">
        <SidebarManager />
      </div>
      <div className="manager-right">
        <Header /> 
        <MainPage/>
      </div>

    </div>
  )
}
export default ManagerMainPage;
