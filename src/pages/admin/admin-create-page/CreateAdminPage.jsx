import React from 'react'
import "./createAdminPage.scss";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";

import CreateAdmin from "../../../components/create-admin/CreateAdmin";

const CreateAdminPage = () => {
  return (
    <div className="admin-page">
    <div className="admin_sidebar">
      <Sidebar />
    </div>
    <div className="admin-right">
      <Header />
      <CreateAdmin/>
    </div> 
 
  </div>
  )
}

export default CreateAdminPage