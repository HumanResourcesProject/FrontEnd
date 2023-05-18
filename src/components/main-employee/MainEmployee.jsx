import React from "react";
import "./mainEmployee.scss";
import EmployeeService from "../../service/EmployeeService";
import { useState, useEffect } from "react";


const MainEmployee = () => {
  const [mahmut, setMahmut] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    EmployeeService.employeeCount(mahmut).then((response)=>{
      setEmployee(response.data)
    })
  }, []);
  const [manager, setManager] = useState([]);
  useEffect(() => {
    EmployeeService.managerCount(mahmut).then((response)=>{
      setManager(response.data)
    })
  }, []);
  return (
    <div className="mainemployee-body">
      
      <div className="module module-multi module-series inset">
        <div className="module-title">
          <div className="title-inner">
            <span className="span-0">related</span>
            <span className="span-1">info</span>
          </div>
        </div>
        <div className="module-body">
          <div className="module-body-wrap">
            
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">Manager </div>
              </div>
            </div>
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">{manager}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="series-footer">&nbsp;</div>
      </div>
      <div className="module module-multi module-series inset">
        <div className="module-title">
          <div className="title-inner">
            <span className="span-0">related</span>
            <span className="span-1">info</span>
          </div>
        </div>
        <div className="module-body">
         
          <div className="module-body-wrap">
            
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">Employee </div>
              </div>
            </div>
            <div className="fragment-media  module-member">
              <div className="media-body-wrap">
                <div className="media-title">{employee}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="series-footer">&nbsp;</div>
      </div>
    </div>
  );
};
export default MainEmployee;
