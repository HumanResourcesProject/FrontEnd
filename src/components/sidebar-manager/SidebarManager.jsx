import React, { useState, useEffect } from "react";
import "./sidebarManager.scss";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
import managericon from "../../assets/images/manager-icon.png"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionIcon from '@mui/icons-material/Description';

const SidebarManager = () => {
  
  return (
    <aside className="full-sidebar-manager">
      <div>
        <div className="sidebar-upper">
          <Link to="/manager" className="sidebar-title-link">
            <img
              src={managericon}
              alt=""
            />
            <p className="sidebar-title">HRP Manager</p>
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
              <Link to="/employeeregister" className="link d-flex">
                <PersonAddIcon />
                Employee Register
              </Link>
            </li>
            <li>
              <Link to="/listmanagers" className="link d-flex">
                <GroupsIcon />
                <div>Manager List</div>
              </Link>
            </li>
            <li>
              <Link to="/employeelistpage" className="link d-flex">
                <GroupsIcon />
                <div>Employee List</div>
              </Link>
            </li> 
            <li>
              <Link to="/managerequests" className="link d-flex">
                <DescriptionIcon />
                <div>Manage Requests</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg">
        <Link to="/loginpage" className="linklogout">
          <div className="logout d-flex">
            <LogoutOutlinedIcon  sx={{ fontSize: 20 }} className="icon" />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </aside>

  );
};
export default SidebarManager;
