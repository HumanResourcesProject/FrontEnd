import React from "react";
import HeaderEmployee from "../../../components/header-employee/HeaderEmployee";
import SidebarEmployee from "../../../components/sidebar-employee/SidebarEmployee";
import "./employeeAdvancePayment.scss";
import AdvancePayment from "../../../components/employee-advance-payment/EmployeeAdvancePayment"

const EmployeeAdvancePayment = () => {
  return (
    <div>
      <div>
        <SidebarEmployee />
      </div>
      <div className="employee-add-leave-right">
        <HeaderEmployee /> 
        <AdvancePayment />
      </div>

    </div>
  );
};

export default EmployeeAdvancePayment;