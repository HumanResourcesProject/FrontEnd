import React from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import MainPage from "../../../components/mainpage/MainPage";
import "./adminpage.scss";
import { useState} from "react";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="adminpage">
      <div className="admin_sidebar">
      {sidebarOpen && <Sidebar />}
      </div>
      <div className="admin-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <Header onToggleSidebar={handleToggleSidebar}/> 
        <MainPage/>
      </div>

    </div>
  );
};

export default AdminPage;
