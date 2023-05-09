import React from 'react'
import "./createCompanyPage.scss";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import CreateCompany from "../../components/create-company/CreateFurkan";


const CreateAdminPage = () => {
  return (
    <div className="admin-page">
    <div className="admin_sidebar">
      <Sidebar />
    </div>
    <div className="admin-right">
      <Header />
      <CreateCompany/>
    </div> 
 
  </div>
  )
}

export default CreateAdminPage