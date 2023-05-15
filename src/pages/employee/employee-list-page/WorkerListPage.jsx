import React from "react";
import Header from "../../../components/header/Header";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./workerListPage.scss";
import TableEmployee from "../../../components/table-employee/TableEmployee";

const WorkerListPage = () => {
  return (
    <div >
      <div >
        <Sidebar />
      </div>
      <div className="worker-list-right">
        <Header />
        <TableEmployee/>
      </div> 
   
    </div>
  )
}
export default WorkerListPage
