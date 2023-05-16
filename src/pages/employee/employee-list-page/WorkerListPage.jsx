import React from "react";
import "./workerListPage.scss";
import TableEmployee from "../../../components/table-employee/TableEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";

const WorkerListPage = () => {
  return (
    <div >
      <div >
        <SidebarEmployee />
      </div>
      <div className="worker-list-right">
        <HeaderEmployee />
        <TableEmployee/>
      </div> 
   
    </div>
  )
}
export default WorkerListPage
