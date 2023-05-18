import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeListLeavePage.scss";
import TableStaffLeave from "../../../components/table-employee-staff-leave/TableStaffLeave";
import TableAdvancePayment from "../../../components/table-employee-advance-payment/TableAdvancePayment";
import TableExpense from "../../../components/table-employee-expense/TableExpense";

const EmployeListLeavePage = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="tablestaffleave-right">
        <HeaderEmployee />
        <TableStaffLeave />
        <TableAdvancePayment />
        <TableExpense />
      </div>

    </div>
  );
};

export default EmployeListLeavePage;