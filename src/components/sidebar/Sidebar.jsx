import React, { useState, useEffect } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
import AdminService from "../../service/AdminService";
const Sidebar = () => {
  

  return (
    <aside className="full-sidebar">
      <div>
        <div className="sidebar-top">
          <Link to="/" className="sidebar-title-link">
            <img
              src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
              alt=""
            />
            <p className="sidebar-title">HR Admin Page</p>
          </Link>
        </div>
        <div className="sidebar-main">
          <ul className="sidebar-nav">
            <li>
              <Link to="/adminprofilpage" className="link d-flex">
                <AccountCircleOutlinedIcon />

                <div>My Profile</div>
              </Link>
            </li>

            <li>
              <Link to="/createadmin" className="link d-flex">
                <HowToRegOutlinedIcon />

                <div>Register</div>
              </Link>
            </li>

            <li>
              <Link to="/adminlistpage" className="link d-flex">
                <SupervisorAccountOutlinedIcon />

                <div>Admin List</div>
              </Link>
            </li>

            <li>
              <Link to="/companymanagercreatepage" className="link d-flex">
                <SupervisorAccountOutlinedIcon />
                <div>Create Company Manager</div>
              </Link>
            </li>
            <li>
              <Link to="/managerlistpage" className="link d-flex">
                <Groups3Icon />
                <div>Company Manager List</div>
              </Link>
            </li>
            
            <li>
              <Link to="/companyregisterpage" className="link d-flex">
                <EngineeringOutlinedIcon />
                <div>Create Company</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg">
        <Link to="/loginpage" className="linklogout">
          <div className="logout d-flex">
            <LogoutOutlinedIcon style={{ color: "white" }} />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
export default Sidebar;
