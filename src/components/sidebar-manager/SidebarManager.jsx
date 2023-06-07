import React, { useState, useEffect } from "react";
import "./sidebarManager.scss";
import { Link, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import letterm from "../../assets/images/letter-m.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SidebarManager = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPage1Open, setIsPage1Open] = useState(false);
  const [isPage2Open, setIsPage2Open] = useState(false);
  const [isPage3Open, setIsPage3Open] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePage1 = () => {
    setIsPage1Open(!isPage1Open);
  };

  const togglePage2 = () => {
    setIsPage2Open(!isPage2Open);
  };

  const togglePage3 = () => {
    setIsPage3Open(!isPage3Open);
  };
  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false);
  };

  return (
    <aside className="full-sidebar-manager">
      <div>
        <div className="sidebar-upper">
          <Link to="/manager" className="sidebar-title-link">
            <img className="managericon" src={letterm} alt="" />
            <p className="sidebar-title">HRP Manager</p>
          </Link>
        </div>
        <div className="sidebar-main">
          <ul className="sidebar-nav">
            <li>
              <Link
                to="/managermyprofilepage"
                className={`link d-flex ${
                  activeItem === "/managermyprofilepage" ? "active" : ""
                }`}
              >
                <AccountCircleOutlinedIcon />
                <div>My Profile</div>
              </Link>
            </li>

            <li>
              <Link
                to="/employeeregister"
                className={`link d-flex ${
                  activeItem === "/employeeregister" ? "active" : ""
                }`}
              >
                <PersonAddIcon />
                Employee Register
              </Link>
            </li>
            <li>
              <Link
                to="/listmanagers"
                className={`link d-flex ${
                  activeItem === "/listmanagers" ? "active" : ""
                }`}
              >
                <GroupsIcon />
                <div>Manager List</div>
              </Link>
            </li>
            <li>
              <Link
                to="/employeelistpage"
                className={`link d-flex ${
                  activeItem === "/employeelistpage" ? "active" : ""
                }`}
              >
                <GroupsIcon />
                <div>Employee List</div>
              </Link>
            </li>
            <li>
              <Link
                to="/managerequests"
                className={`link d-flex ${
                  activeItem === "/managerequests" ? "active" : ""
                }`}
                onClick={toggleDropdown}
              >
                {isDropdownOpen && <KeyboardArrowUpIcon />}
                {!isDropdownOpen && <KeyboardArrowDownIcon />}
                <div>Manage Requests</div>
              </Link>
              {isDropdownOpen || isDropdownHovered ? (
                <ul
                  className="dropdown-menu"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <li onClick={togglePage1}>
                    <Link
                      to="/listemployeeleaves"
                      className={`link2 ${
                        activeItem === "/listemployeeleaves" ? "active" : ""
                      }`}
                    >
                      Leave
                    </Link>
                  </li>
                  <li onClick={togglePage2}>
                    <Link
                      to="/listemployeeadvancepayments"
                      className={`link2 ${
                        activeItem === "/listemployeeadvancepayments"
                          ? "active"
                          : ""
                      }`}
                    >
                      Advance Payment
                    </Link>
                  </li>
                  <li onClick={togglePage3}>
                    <Link
                      to="/listemployeeexpenses"
                      className={`link2 ${
                        activeItem === "/listemployeeexpenses" ? "active" : ""
                      }`}
                    >
                      Expense
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
      <div className="lg">
        <Link to="/loginpage" className="linklogout">
          <div className="logout d-flex">
            <LogoutOutlinedIcon sx={{ fontSize: 20 }} className="icon" />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarManager;
