import React from 'react'
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import CompanyManagerCreate from "../../../components/companyManagerCreate/CompanyManagerCreate"
import "./companymanagercreatepage.scss";
import { useState} from "react";

const CompanyManagerCreatePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="companymanagercreatemain">
    <div>
    {sidebarOpen && <Sidebar />}
    </div>
    <div className="companymanagercreateright" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}> 
    <Header onToggleSidebar={handleToggleSidebar} /> 
      <CompanyManagerCreate/>
    </div>

  </div>
  )
}

export default CompanyManagerCreatePage