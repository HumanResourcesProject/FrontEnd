import React from "react";
import "./mainEmployee.scss";
import EmployeeService from "../../service/EmployeeService";
import { useState, useEffect } from "react";


const MainEmployee = () => {
  const [token, setToken] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });
  const [profile, setProfile] = useState({ data: {} });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.employeecount(token);
        setProfile(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
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
                <div className="media-title">45</div>
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
                <div className="media-title">501</div>
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
