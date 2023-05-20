import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeAdvancePayment.scss";
import AdvancePayment from "../../../components/employee-advance-payment/EmployeeAdvancePayment"
import { useState} from "react";

const EmployeeAdvancePayment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="employee-add-leave-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar}/> 
        <AdvancePayment />
      </div>

    </div>
  );
};

export default EmployeeAdvancePayment;