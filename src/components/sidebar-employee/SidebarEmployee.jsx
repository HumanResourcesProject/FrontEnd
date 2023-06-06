import React, { useState, useEffect } from "react";
import "./sidebarEmployee.scss";
import { Link, useLocation  } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import lettere from "../../assets/images/lettere.png";

const SidebarEmployee = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);



  return (
    <aside className="full-sidebar-employee">
      <div>
        <div className="sidebar-top-employee">
          <Link to="/employee" className="sidebar-title-link-employee">
            <img
              src={lettere}
              alt=""
            />
            <p className="sidebar-title-employee">HRP Employee</p>
          </Link>
        </div>
        <div className="sidebar-main-employee">
          <ul className="sidebar-nav-employee">
            <li>
              <Link to="/employeemyprofile" className={`link d-flex ${
                  activeItem === "/employeemyprofile" ? "active" : ""
                }`}>
                <AccountCircleOutlinedIcon />
                <div>My Profile</div>
              </Link>
            </li>
            
            <li>
              <Link to="/employeelistleave" className={`link d-flex ${
                  activeItem === "/employeelistleave" ? "active" : ""
                }`}>
                <HowToRegOutlinedIcon />
                <div>Requests</div>
              </Link>
            </li>
            <li>
              <Link to="/listallemployees" className={`link d-flex ${
                  activeItem === "/listallemployees" ? "active" : ""
                }`}>
                <HowToRegOutlinedIcon />
                <div>Employee List</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg">
        <Link to="/loginpage" className="linklogout">
          <div className="logout d-flex">
            <LogoutOutlinedIcon style={{ fontSize: 20  }} />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
export default SidebarEmployee;
