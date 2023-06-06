import React from "react";
import "./mainEmployee.scss";
import EmployeeService from "../../service/EmployeeService";
import { useState, useEffect } from "react";
import EmployeeMainImage from "../../assets/images/employee-main.svg";
// import { Chart } from "react-google-charts";

const MainEmployee = () => {
  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });

  //   const dataTable = [
  //     [ "Failure","Success"],
  //     ["Success", 70],
  //     ["Failure", 71],
  //   ];
  //   <div className="chart">
  //   <div className="inner-chart">
  //   <Chart
  //     chartType="PieChart"
  //     data={dataTable}
  //     options={options}
  //     width={"100%"}
  //     height={"400px"}
  //   />
  //   </div>
  // </div>
  // const options = {
  //   title: "Employee Performance",
  //   sliceVisibilityThreshold: 0.2, // 20%
  //   fontSize: 12,
  // };
  const [employee, setEmployee] = useState({
    department: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      //Takımdaki calisan sayisi
      try {
        const response = await EmployeeService.getEmployeeInformations(data);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-main-container">
      <div className="second-row">
        <div className="left">
          <div className="department">
            <div className="department-title">Leave Entitlement</div>
            <div className="text">5/20</div>
          </div>
          <div className="department">
            <div className="department-title">Department</div>
            <div className="text">{employee.department || ""}</div>
          </div>
          <div className="workdays">
            <div className="workdays-title">Occupation</div>
            <div>{employee.occupation}</div>
          </div>
          <div className="workdays">
            <div className="workdays-title">Job Start</div>
            <div>{employee.jobStart}</div>
          </div>
        </div>
        <div className="right">
          <img className="employee-main-image" src={EmployeeMainImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default MainEmployee;
