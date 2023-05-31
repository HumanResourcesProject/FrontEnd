import React from 'react'
import "./createCompanyPage.scss";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import CreateCompany from "../../../components/create-company/CreateCompany";
import { useState} from "react";

const CreateCompanyPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="admin-page">
    <div className="admin_sidebar">
    {sidebarOpen && <Sidebar />}
    </div>
    <div className="admin-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
      <Header onToggleSidebar={handleToggleSidebar} />
      <CreateCompany/>
    </div> 
 
  </div>
  )
}

export default CreateCompanyPage