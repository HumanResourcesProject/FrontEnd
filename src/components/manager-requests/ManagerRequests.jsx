import React from "react";
import "./managerRequests.scss";
import { Link } from "react-router-dom";

const ManagerRequests = () => {
  return (
    <div className="requests-container">
      <Link to="/listemployeeleaves" className="requests-left request-block">
        <div >
          <h4>Leave Requests</h4>
          <p>1 request waiting for your approval decision.</p>
        </div>
      </Link>
      <Link to="/listemployeeadvancepayments"  className="requests-middle request-block">
        <div>
          <h4>Advance Payments Requests</h4>
          <p>2 request waiting for your approval decision</p>
        </div>
      </Link>
      <Link to="/listemployeeexpenses"  className="requests-right request-block">
        <div>
          <h4>Expenses Requests</h4>
          <p>3 request waiting for your approval decision</p>
        </div>
      </Link>
    </div>
  );
};

export default ManagerRequests;
