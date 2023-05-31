import React from 'react'
import CardList from '../cards/CardList'
import './adminMain.scss'
import { useState, useEffect } from "react";
import ManagerService from "../../service/CompanyManagerService";
import EmployeeService from "../../service/EmployeeService";
import AdminService from '../../service/AdminService';
import CompanyService from '../../service/CompanyService';


 const AdminMain = () => {
  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role")
  });
  const[totalAdminCount,setTotalAdminCount]= useState("");              //total admin
  const[totalCompanyCount,setTotalCompanyCount] = useState("");                   //total company
  const[totalManagerCount,setTotalManagerCount] = useState("");    // total manager
  const[totalEmployeeCount,setTotalEmployeeCount] = useState("");       //total employee


  
  useEffect(() => {
    const fetchData = async () => {
      
      //total admin
      try {
        const response = await AdminService.totaladmincount(data);
        setTotalAdminCount(response.data)
      } catch (error) {
        console.error(error);
      }

      //total company
      try {
        const response = await CompanyService.totalcompanycount(data);
        setTotalCompanyCount(response.data)
      } catch (error) {
        console.error(error);
      }
      
      //total manager
      try {
        const response = await ManagerService.totalmanagercount(data);
        setTotalManagerCount(response.data)
      } catch (error) {
        console.error(error);
      }
      //total employee
      try {
        const response = await EmployeeService.totalemployeecount(data);
        setTotalEmployeeCount(response.data)
      } catch (error) {
        console.error(error);
      }





    };

    fetchData();
  }, []);


  return (
  <div className="main-admin-container">
      <div className="small-boxes">
        <div className="box orange">
          <div className="box-left">
            <div className="upper">{totalAdminCount || ""}</div>
            <div className="lower">Total Number of Admins</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cfGtoFQFGV9e&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box blue">
          <div className="box-left">
            <div className="upper">{totalCompanyCount || ""}</div>
            <div className="lower">Total Number of Companies</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=p8ii741wDy2D&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box green">
          <div className="box-left">
            <div className="upper">{totalManagerCount || ""}</div>
            <div className="lower">Total Number of Managers</div>
          </div>
          <div className="box-right">
            <img
              src="https://cdn-icons-png.flaticon.com/128/912/912267.png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box pink">
          <div className="box-left">
            <div className="upper">{totalEmployeeCount || ""}</div>
            <div className="lower">Total Number of Employees</div>
          </div>
          <div className="box-right">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6823/6823086.png"
              className="icon"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="company-title">
        <div>Companies</div>
      </div>
      <div className="cards">
      <CardList />
      </div>
    
  </div>
  )
}
export default AdminMain
