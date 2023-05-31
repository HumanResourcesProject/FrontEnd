import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
import lettera from "../../assets/images/a.png";

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <div className="full-sidebar">
      <div>
        <div className="sidebar-top">
          <Link to="/admin" className="sidebar-title-link">
            <img
              src={lettera}
              alt=""
            />
            <p className="sidebar-title">HR Admin Page</p>
          </Link>
        </div>
        <div className="sidebar-main">
          <ul className="sidebar-nav">
            <li>
              <Link to="/adminprofilpage" className={`link d-flex ${
                  activeItem === "/adminprofilpage" ? "active" : ""
                }`}>
                <AccountCircleOutlinedIcon />

                <div>My Profile</div>
              </Link>
            </li>

            <li>
              <Link to="/createadmin" className={`link d-flex ${
                  activeItem === "/createadmin" ? "active" : ""
                }`}>
                <HowToRegOutlinedIcon />

                <div>Admin Register</div>
              </Link>
            </li>
            <li>
              <Link to="/companyregisterpage" className={`link d-flex ${
                  activeItem === "/companyregisterpage" ? "active" : ""
                }`}>
                <EngineeringOutlinedIcon />
                <div>Company Register</div>
              </Link>
            </li>
            <li>
              <Link to="/companymanagercreatepage" className={`link d-flex ${
                  activeItem === "/companymanagercreatepage" ? "active" : ""
                }`}>
                <SupervisorAccountOutlinedIcon />
                <div>Manager Register</div>
              </Link>
            </li>
            <li>
              <Link to="/adminlistpage" className={`link d-flex ${
                  activeItem === "/adminlistpage" ? "active" : ""
                }`}>
                <SupervisorAccountOutlinedIcon />

                <div>Admin List</div>
              </Link>
            </li>

           
            <li>
              <Link to="/managerlistpage" className={`link d-flex ${
                  activeItem === "/managerlistpage" ? "active" : ""
                }`}>
                <Groups3Icon />
                <div>Manager List</div>
              </Link>
            </li>
            
           
          </ul>
        </div>
      </div>
      <div className="lg">
        <Link to="/loginpage" className="linklogout">
          <div className="logout d-flex">
            <LogoutOutlinedIcon style={{ fontSize: 20 }} />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;