import React, { useState, useEffect } from "react";
import "./sidebarEmployee.scss";
import { Link } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AdminService from "../../service/AdminService";
const SidebarEmployee = () => {
  const [profil, setProfil] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token"),
  });

  const profilpart = () => {
    AdminService.postShortDetails(token).then((response) => {
      setProfil(response.data);
    });
  };

  useEffect(() => {
    profilpart();
  }, []);

  return (
    <aside className="full-sidebar">
      <div>
        <div className="sidebar-top">
          <Link to="/manager" className="sidebar-title-link">
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
              <Link to="" className="link d-flex">
                <AccountCircleOutlinedIcon />
                <div>My Profile</div>
              </Link>
            </li>
            <li>
              <Link to="" className="link d-flex">
                <HowToRegOutlinedIcon />

                <div>Profile Update</div>
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
