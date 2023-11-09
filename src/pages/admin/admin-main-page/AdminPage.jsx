import React from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./adminpage.scss";
import { useState} from "react";
import AdminMain from "../../../components/admin-main/AdminMain";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="admin-main-page">
      <div className="admin-sidebar">
      {sidebarOpen && <Sidebar />}
      </div>
      <div className="admin-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <Header onToggleSidebar={handleToggleSidebar}/> 
        <AdminMain/>
      </div>

    </div>
  );
};

export default AdminPage;
