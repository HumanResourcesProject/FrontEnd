import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./adminListPage.scss";
import TableAdmin from "../../components/table-admin/TableAdmin";

const AdminListPage = () => {
  return (
    <div className="adminpage">
      <div className="admin_sidebar">
        <Sidebar />
      </div>
      <div>
        <Header />
        <TableAdmin/>
      </div> 
   
    </div>
  )
}
export default AdminListPage
