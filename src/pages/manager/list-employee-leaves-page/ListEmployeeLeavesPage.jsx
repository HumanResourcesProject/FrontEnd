import React from 'react'
import "./listEmployeeLeavesPage.scss";
import SidebarManager from "../../../components/sidebar-manager/SidebarManager";
import TableManagerLeaves from "../../../components/table-manager-list-leaves/TableManagerLeaves";
import HeaderManager from '../../../components/header-manager/HeaderManager';
import { useState} from "react";

const ListEmployeeLeavesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // dropdown'ın açılıp kapatılmasını kontrol etmek için bir fonksiyon
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
    <div>
    {sidebarOpen && <SidebarManager isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown}/>}
    </div>
    <div className="employee-list-leaves-right" style={{marginLeft: sidebarOpen ? '220px' : '0px'}}>
      <HeaderManager onToggleSidebar={handleToggleSidebar}/>
      <TableManagerLeaves/>
    </div> 
 
  </div>
  )
}

export default ListEmployeeLeavesPage;
