import React from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import AdminProfil from "../../../components/adminProfil/AdminProfil";
import "./adminprofilpage.scss";
import { useState} from "react";

const AdminProfilPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="adminprofilmain">
      <div>
       {sidebarOpen && <Sidebar />}
      </div>
      <div className="adminprofilright" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <Header onToggleSidebar={handleToggleSidebar} /> 
        <AdminProfil/>
      </div>

    </div>
  );
};

export default AdminProfilPage;
