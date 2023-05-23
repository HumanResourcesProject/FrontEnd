import React from "react";
import "./mainEmployee.scss";
import EmployeeService from "../../service/EmployeeService";
import { useState, useEffect } from "react";


const MainEmployee = () => {
  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });
  
 
  return (
    <div className="employee-main-container">
        <div className="small-boxes">
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">All Employees</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">My Employee Team</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">My Team's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">Company's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="small-boxes">
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">All Employees</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">My Employee Team</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">My Team's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">555</div>
            <div className="lower">Company's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainEmployee;
