import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./adminpage.scss";

const AdminPage = () => {
  return (
    <div className="adminpage">
      <div className="admin_sidebar">
        <Sidebar />
      </div>
        <Header /> 
    </div>
  );
};

export default AdminPage;
