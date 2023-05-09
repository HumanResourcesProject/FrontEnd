import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
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

          <div className="sidebar-admin-panel">
            <Link className="sidebar-admin-panel-link">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="admin"
              />
              <p className="admin-name">Mahmut</p>
            </Link>
          </div>
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
              <Link to="/managerlistpage" className="link d-flex">
                <Groups3Icon />
                <div>Project Manager List</div>
              </Link>
            </li>
            <li>
              <Link to="/workerlistpage" className="link d-flex">
                <EngineeringOutlinedIcon />
                <div>Worker List</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg">
      <Link to="/loginpage" className="linklogout">
        <div className="logout d-flex">
          <LogoutOutlinedIcon style={{color: 'white'}}/>
          <div className="fw-large lout">Logout </div>
        </div>
      </Link>
      </div>
    </aside>
  );
};
export default Sidebar;
