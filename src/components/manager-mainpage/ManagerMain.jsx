import React from "react";
import "./managerMain.scss";
import { useState, useEffect } from "react";
import ManagerService from "../../service/CompanyManagerService";
import EmployeeService from "../../service/EmployeeService";
import AllEmployeeIcon from "../../assets/images/all-employee.svg";
import AllEmployeeIconBlue from "../../assets/images/all-blue-employee.svg";
import AgeBlue from "../../assets/images/age-blue.svg";
import AgeGreen from "../../assets/images/age-green.svg";
import CompanyLogo from "../../assets/images/company-logo.svg";
import ManagerLogo from "../../assets/images/manager-logo.svg";

const MainPage = () => {
  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role")
  });
  const[myEmployeeCount,setMyEmployeeCount]= useState("");              //yönetici altında
  const[employeeCount,setEmployeeCount] = useState("");                   //şirketin genel
  const[myEmployeeAverageAge,setMyEmployeeAverageAge] = useState("");    // yöneticinin altında
  const[employeeAverageAge,setEmployeeAverageAge] = useState("");       //şirketin genel
  const[annualExpense,setAnnualExpense] = useState("");
  const[myAnnualExpense,setMyAnnualExpense] = useState("");
  const[monthlyExpense,setMonthlyExpense] = useState("");
  const[myMonthlyExpense,setMyMonthlyExpense] = useState("");
  const[newEmployees,setNewEmployees] = useState([
    {
      address:"",
      authId:"",
      avatar:"",
      birthDate: "",
      birthPlace: "",
      createdate:"",
      department:"",
      email:"",
      id:"",
      identityNumber:"",
      jobEnd:"",
      jobStart:"",
      leaveCount:"",
      managerId:"",
      middleName:"",
      name:"",
      occupation:"",
      phone:"",
      salary:"",
      state:"",
      surname:"",
      updatedate:"",
    },{
      address:"",
      authId:"",
      avatar:"",
      birthDate: "",
      birthPlace: "",
      createdate:"",
      department:"",
      email:"",
      id:"",
      identityNumber:"",
      jobEnd:"",
      jobStart:"",
      leaveCount:"",
      managerId:"",
      middleName:"",
      name:"",
      occupation:"",
      phone:"",
      salary:"",
      state:"",
      surname:"",
      updatedate:"",
    },{
      address:"",
      authId:"",
      avatar:"",
      birthDate: "",
      birthPlace: "",
      createdate:"",
      department:"",
      email:"",
      id:"",
      identityNumber:"",
      jobEnd:"",
      jobStart:"",
      leaveCount:"",
      managerId:"",
      middleName:"",
      name:"",
      occupation:"",
      phone:"",
      salary:"",
      state:"",
      surname:"",
      updatedate:"",
    },{
      address:"",
      authId:"",
      avatar:"",
      birthDate: "",
      birthPlace: "",
      createdate:"",
      department:"",
      email:"",
      id:"",
      identityNumber:"",
      jobEnd:"",
      jobStart:"",
      leaveCount:"",
      managerId:"",
      middleName:"",
      name:"",
      occupation:"",
      phone:"",
      salary:"",
      state:"",
      surname:"",
      updatedate:"",
    }
  ]);

  
  
  useEffect(() => {
    const fetchData = async () => {
      
      //Takımdaki calisan sayisi
      try {
        const response = await EmployeeService.employeeCount(data);
        setEmployeeCount(response.data)
      } catch (error) {
        console.error(error);
      }

      //Şirket çalışan sayısı
      try {
        const response = await ManagerService.findAllMyEmployeeCount(data);
        setMyEmployeeCount(response.data)
      } catch (error) {
        console.error(error);
      }
      
      //Takımdaki yaş ortalaması
      try {
        const response = await EmployeeService.myEmployeeAverageAge(data);
        setMyEmployeeAverageAge(response.data)
      } catch (error) {
        console.error(error);
      }
      //Şirketteki yaş ortalaması
      try {
        const response = await EmployeeService.employeeAverageAge(data);
        setEmployeeAverageAge(response.data)
      } catch (error) {
        console.error(error);
      }
      //Şirketin calisanların yillik maasi
      try {
        const response = await EmployeeService.annualExpense(data);
        setAnnualExpense(response.data);
      } catch (error) {
        console.error(error);
      }
      //Takımdaki calisanların yıllık maasi
      try {
        const response = await EmployeeService.myAnnualExpense(data);
        setMyAnnualExpense(response.data);
      } catch (error) {
        console.error(error);
      }
      //Sirket calisanların aylik maasi
      try {
        const response = await EmployeeService.monthlyExpense(data);
        setMonthlyExpense(response.data);
      } catch (error) {
        console.error(error);
      }
      //Takımdaki calisanların aylik maasi
      try {
        const response = await EmployeeService.myMonthlyExpense(data);
        setMyMonthlyExpense(response.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await EmployeeService.getNewEmployees();
        
        setNewEmployees(response.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="manager-main-container">
      <div className="small-boxes">
        <div className="box">
          <div className="box-left">
            <div className="upper">{employeeCount || ""}</div>
            <div className="lower">Company's Employees</div>
          </div>
          <div className="box-right">
            <img
              src={AllEmployeeIcon}
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">{myEmployeeCount || ""}</div>
            <div className="lower">My Employee Team</div>
          </div>
          <div className="box-right">
            <img
              src={AllEmployeeIconBlue}
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">{employeeAverageAge || ""}</div>
            <div className="lower">Company's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src={AgeGreen}
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">{myEmployeeAverageAge || ""}</div>
            <div className="lower">My Team's Average Age</div>
          </div>
          <div className="box-right">
            <img
              src={AgeBlue}
              className="icon"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="middle-part">
        <div className="left-part">
          <div className="title-part">
            <p className="title">New Employees</p>
            
          </div>
          <div className="employees">
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src={newEmployees[0].avatar || "gcavocats.ca/wp-content/uploads/2018/09/man-avatar"}
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">{newEmployees[0].name || ""} {newEmployees[0].surname || ""}</p>
                  <p className="date"> {newEmployees[0].jobStart || ""}</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">{newEmployees[0].identityNumber || ""}</div>
              </div>
            </div>
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src={newEmployees[1].avatar || "gcavocats.ca/wp-content/uploads/2018/09/man-avatar"}
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">{newEmployees[1].name || ""} {newEmployees[1].surname || ""}</p>
                  <p className="date"> {newEmployees[1].jobStart || ""}</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">{newEmployees[1].identityNumber || ""}</div>
              </div>
            </div>
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src={newEmployees[2].avatar || "gcavocats.ca/wp-content/uploads/2018/09/man-avatar"}
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">{newEmployees[2].name || ""} {newEmployees[2].surname || ""}</p>
                  <p className="date"> {newEmployees[2].jobStart || ""}</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">{newEmployees[2].identityNumber || ""}</div>
              </div>
            </div>
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src={newEmployees[3].avatar || "gcavocats.ca/wp-content/uploads/2018/09/man-avatar"}
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">{newEmployees[3].name || ""} {newEmployees[3].surname || ""}</p>
                  <p className="date"> {newEmployees[3].jobStart || ""}</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">{newEmployees[3].identityNumber || ""}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="annual-box">
            <div className="expenses-title">Annual Expenses</div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src={CompanyLogo}
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Company</div>
                  <div className="text-bottom">
                    {/* <div className="colored-text">17/23</div> */}
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">{annualExpense || ""}</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src={ManagerLogo}
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Manager</div>
                  <div className="text-bottom">
                    {/* <div className="colored-text">17/23</div> */}
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">{myAnnualExpense || ""}</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
          </div>
          <div className="annual-box">
            <div className="expenses-title">Monthly Expenses</div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src={CompanyLogo}
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Company</div>
                  <div className="text-bottom">
                    {/* <div className="colored-text">17/23</div> */}
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">{monthlyExpense || ""}</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src={ManagerLogo}
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Manager</div>
                  <div className="text-bottom">
                    {/* <div className="colored-text">17/23</div> */}
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">{myMonthlyExpense || ""}</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
