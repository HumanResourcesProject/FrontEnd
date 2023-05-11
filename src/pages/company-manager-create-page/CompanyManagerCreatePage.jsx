import React from 'react'
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import CompanyManagerCreate from "../../components/companyManagerCreate/CompanyManagerCreate"
import "./companymanagercreatepage.scss";

const CompanyManagerCreatePage = () => {
  return (
    <div className="companymanagercreatemain">
    <div>
      <Sidebar />
    </div>
    <div className="companymanagercreateright">
    <Header /> 
      <CompanyManagerCreate/>
    </div>

  </div>
  )
}

export default CompanyManagerCreatePage