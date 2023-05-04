import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./workerListPage.scss";
import TableAdmin from "../../components/table-admin/TableWorker";

const WorkerListPage = () => {
  return (
    <div >
      <div >
        <Sidebar />
      </div>
      <div className="admin-right">
        <Header />
        
      </div> 
   
    </div>
  )
}
export default WorkerListPage
