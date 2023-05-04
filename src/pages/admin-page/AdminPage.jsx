import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import MainPage from "../../components/mainpage/MainPage";
import "./adminpage.scss";

const AdminPage = () => {
  return (
    <div className="adminpage">
      <div className="admin_sidebar">
        <Sidebar />
      </div>
      <div className="admin-right">
        <Header /> 
        <MainPage/>
      </div>

    </div>
  );
};

export default AdminPage;
