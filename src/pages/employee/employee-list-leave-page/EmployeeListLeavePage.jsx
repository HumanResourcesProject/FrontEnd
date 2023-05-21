import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeListLeavePage.scss";
import TableStaffLeave from "../../../components/table-employee-staff-leave/TableStaffLeave";
import TableAdvancePayment from "../../../components/table-employee-advance-payment/TableAdvancePayment";
import TableExpense from "../../../components/table-employee-expense/TableExpense";
import { useState} from "react";

const EmployeListLeavePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <div>
      {sidebarOpen && <SidebarEmployee />}
      </div>
      <div className="tablestaffleave-right" style={{marginLeft: sidebarOpen ? '250px' : '0px'}}>
        <HeaderEmployee onToggleSidebar={handleToggleSidebar}/>
        <TableStaffLeave />
        <TableAdvancePayment />
        <TableExpense />
      </div>

    </div>
  );
};

export default EmployeListLeavePage;