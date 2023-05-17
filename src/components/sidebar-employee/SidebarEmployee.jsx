import React, { useState, useEffect } from "react";
import "./sidebarEmployee.scss";
import { Link } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const SidebarEmployee = () => {
  const [profil, setProfil] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token"),
  });



  return (
    <aside className="full-sidebar">
      <div>
        <div className="sidebar-top">
          <Link to="/employee" className="sidebar-title-link">
            <img
              src="https://img.icons8.com/?size=512&id=vWvnvMErmrYg&format=png"
              alt=""
            />
            <p className="sidebar-title">HR Employee Page</p>
          </Link>
        </div>
        <div className="sidebar-main">
          <ul className="sidebar-nav">
            <li>
              <Link to="/employeemyprofile" className="link d-flex">
                <AccountCircleOutlinedIcon />
                <div>My Profile</div>
              </Link>
            </li>
            <li>
              <Link to="/employeeupdateprofile" className="link d-flex">
                <HowToRegOutlinedIcon />
                <div>Profile Update</div>
              </Link>
            </li>
            <li>
              <Link to="/employeelistleave" className="link d-flex">
                <HowToRegOutlinedIcon />
                <div>Staff Leave Table</div>
              </Link>
            </li>
            <li>
              <Link to="/employeeaddleave" className="link d-flex">
                <HowToRegOutlinedIcon />
                <div>Employee Add Leave</div>
              </Link>
            </li>
            <li>
              <Link to="/employeeadvancepayment" className="link d-flex">
                <HowToRegOutlinedIcon />
                <div>Advance Payment</div>
              </Link>
            </li>
            <li>
              <Link to="/listallemployees" className="link d-flex">
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
            <LogoutOutlinedIcon style={{ color: "white" }} />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
export default SidebarEmployee;
