import React from 'react'
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import CompanyManagerListTable from "../../components/companyManagerListTable/CompanyManagerListTable"
import "./companymanagerlisttablepage.scss";

const CompanyManagerListTablePage = () => {
  return (
    <div className="companymanagerlisttablemain">
    <div>
      <Sidebar />
    </div>
    <div className="companymanagerlisttableright">
    <Header /> 
      <CompanyManagerListTable/>
    </div>

  </div>
  )
}

export default CompanyManagerListTablePage