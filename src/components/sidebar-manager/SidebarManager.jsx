import React, { useState, useEffect } from "react";
import "./sidebarManager.scss";
import { Link } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";

const SidebarManager = () => {
  
  return (
    <aside className="full-sidebar">
      <div>
        <div className="sidebar-top">
          <Link to="/manager" className="sidebar-title-link">
            <img
              src="https://img.icons8.com/?size=512&id=so2NxZq25dzw&format=png"
              alt=""
            />
            <p className="sidebar-title">HR Manager Page</p>
          </Link>
        </div>
        <div className="sidebar-main">
          <ul className="sidebar-nav">
            <li>
              <Link to="/managermyprofilepage" className="link d-flex">
                <AccountCircleOutlinedIcon />
                <div>My Profile</div>
              </Link>
            </li>
            <li>
              <Link to="/managerupdatepage" className="link d-flex">
                <HowToRegOutlinedIcon />

                <div>Profile Update</div>
              </Link>
            </li>

            <li>
              <Link to="/employeeregister" className="link d-flex">
                <SupervisorAccountOutlinedIcon />
                <div>Employee Register</div>
              </Link>
            </li>
            <li>
              <Link to="/listmanagers" className="link d-flex">
                <Groups3Icon />
                <div>Company Manager List</div>
              </Link>
            </li>
            {/* <li>
              <Link to="managerlistemployeepage" className="link d-flex">
                <EngineeringOutlinedIcon />
                <div>Employee List</div>
              </Link>
            </li> */}
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
export default SidebarManager;
