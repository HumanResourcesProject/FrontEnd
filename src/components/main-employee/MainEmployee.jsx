import React from "react";
import "./mainEmployee.scss";
import EmployeeService from "../../service/EmployeeService";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const MainEmployee = () => {
  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });

  const dataTable = [
    ["Pizza", "Popularity"],
    ["Sosisli", 33],
    ["Pepperoni", 31],
  ];

  const options = {
    title: "Employee Performance",
    sliceVisibilityThreshold: 0.2, // 20%
    fontSize: 12,
    
   
  };

  return (
    <div className="employee-main-container">
      <div className="small-boxes">
        <div className="box">
          <div className="box-left">
            <div className="upper">5/20</div>
            <div className="lower">İzin hakkı</div>
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
            <div className="lower">Son aldığı izin süresi</div>
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
            <div className="lower">En son aldığı izin tarihi</div>
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
            <div className="lower">En çok izin aldığı tür</div>
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
            <div className="lower">Toplam aldığı avans</div>
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
            <div className="lower">Son aldığı avans</div>
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
            <div className="lower">Son aldığı avans tarihi</div>
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
            <div className="lower">En çok aldığı avans tipi</div>
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
      <div className="second-row">
        <div className="left">
          <div className="department">
            <div className="department-title">Department</div>
            <div className="text">Food</div>
          </div>
          <div className="workdays">
            <div className="workdays-title">Day of Work</div>
            <div>142</div>
          </div>
        </div>
        <div className="chart">
          <div className="inner-chart">
          <Chart
            chartType="PieChart"
            data={dataTable}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainEmployee;
