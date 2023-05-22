import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeMainPage.scss";
import MainEmployee from "../../../components/main-employee/MainEmployee";
import { useState} from "react";

const EmployeeMainPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="mainpage">
      <div className="mainpage_sidebar">
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="mainpage-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar}/> 
        <MainEmployee />
      </div>

    </div>
  );
};

export default EmployeeMainPage;