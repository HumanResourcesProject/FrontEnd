import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeMyProfilePage.scss";
import EmployeeMyProfile from "../../../components/employee-myprofile/EmployeeMyProfile";
import { useState} from "react";

const EmployeeMyProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="employeeprofilepage-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar}/> 
        <EmployeeMyProfile />
      </div>

    </div>
  );
};

export default EmployeeMyProfilePage;