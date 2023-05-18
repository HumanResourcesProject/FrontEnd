import React from "react";
import "./managerRequests.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompanyManagerService from "../../service/CompanyManagerService";

const ManagerRequests = () => {
  const token = sessionStorage.getItem("token");
  const [advancePayment, setAdvancePayment] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    CompanyManagerService.findallpendingadvancepaymentcount(token)
    .then((response) => {
      setAdvancePayment(response.data);
    });
  }, []);
  useEffect(() => {
    CompanyManagerService.findallpendingexpensescount(token)
    .then((response) => {
      setExpenses(response.data);
    });
  }, []);
  useEffect(() => {
    CompanyManagerService.findallpendingleavescount(token)
    .then((response) => {
      setLeaves(response.data);
    });
  }, []);


  return (
    <div className="requests-container">
      <Link to="/listemployeeleaves" className="requests-left request-block">
        <div >
          <h4>Leave Requests</h4>
          <p>{leaves} request waiting for your approval decision.</p>
        </div>
      </Link>
      <Link to="/listemployeeadvancepayments"  className="requests-middle request-block">
        <div>
          <h4>Advance Payments Requests</h4>
          <p>{advancePayment} request waiting for your approval decision</p>
        </div>
      </Link>
      <Link to="/listemployeeexpenses"  className="requests-right request-block">
        <div>
          <h4>Expenses Requests</h4>
          <p>{expenses} request waiting for your approval decision</p>
        </div>
      </Link>
    </div>
  );
};

export default ManagerRequests;
