import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminProfil from "../../components/adminProfil/AdminProfil"
import "./adminprofilpage.scss"

const AdminProfilPage = () => {
  return (
    <div className="adminprofilmain">
      <div>
        <Sidebar />
      </div>
      <div className="adminprofilright">
      <Header /> 
        <AdminProfil/>
      </div>

    </div>
  );
};

export default AdminProfilPage;
