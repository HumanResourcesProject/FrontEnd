import React from 'react'
import "./createAdminPage.scss";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import CreateAdmin from "../../../components/create-admin/CreateAdmin";
import { useState} from "react";

const CreateAdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="admin-page">
    <div className="admin_sidebar">
    {sidebarOpen && <Sidebar />}
    </div>
    <div className="admin-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
      <Header onToggleSidebar={handleToggleSidebar}/>
      <CreateAdmin/>
    </div> 
 
  </div>
  )
}

export default CreateAdminPage