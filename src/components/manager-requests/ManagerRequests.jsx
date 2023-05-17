import React from "react";
import "./managerRequests.scss";

const ManagerRequests = () => {
  return (
    <div className="requests-container">
      <div className="requests-right request-block">
        <h2>Employee Leave Requests</h2>
      </div>
      <div className="requests-middle request-block">
      <h2>Employee Advance Payments Requests</h2>

      </div>
      <div className="requests-left request-block">
      <h2>Employee Expenses Requests</h2>

      </div>
    </div>
  );
};

export default ManagerRequests;
