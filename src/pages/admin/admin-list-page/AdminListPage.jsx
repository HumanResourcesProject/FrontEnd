import React from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./adminListPage.scss";
import TableAdmin from "../../../components/table-admin/TableAdmin";
import { useState} from "react";

const AdminListPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="admin-page2">
      <div className="admin_sidebar2">
      {sidebarOpen && <Sidebar />}
      </div>
      <div className="admin-right2" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
        <Header onToggleSidebar={handleToggleSidebar} />
        <TableAdmin/>
      </div> 
   
    </div>
  )
}
export default AdminListPage
