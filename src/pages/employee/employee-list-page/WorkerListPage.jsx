import React from "react";
import "./workerListPage.scss";
import TableEmployee from "../../../components/table-employee/TableEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import { useState} from "react";

const WorkerListPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div >
      <div >
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="worker-list-right " style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar}/>
        <TableEmployee/>
      </div> 
   
    </div>
  )
}
export default WorkerListPage
