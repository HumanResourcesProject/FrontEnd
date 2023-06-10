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

// ... previous code ...

const handleLinkClick = () => {
  // Do not close the dropdown when clicking on a submenu item
  setIsDropdownOpen(true);
};

useEffect(() => {
  setActiveItem(location.pathname);

  // Keep the dropdown open when changing pages within the dropdown
  if (
    location.pathname === "/listemployeeleaves" ||
    location.pathname === "/listemployeeadvancepayments" ||
    location.pathname === "/listemployeeexpenses"
  ) {
    setIsDropdownOpen(true);
  } else {
    setIsDropdownOpen(false);
  }
}, [location]);

// ... previous code ...



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
            <li className="managerequestli">
              <div
                className={`link d-flex ${
                  activeItem === "/managerequests" ? "active" : ""
                }`}
                onClick={toggleDropdown}
              >
                {isDropdownOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
                <div>Manage Requests</div>
              </div>

              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={togglePage1}>
                    <Link
                      to="/listemployeeleaves"
                      className={` link2 ${
                        activeItem === "/listemployeeleaves" ? "active" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Leave
                    </Link>
                  </li>
                  <li onClick={togglePage2}>
                    <Link
                      to="/listemployeeadvancepayments"
                      className={`link3  ${
                        activeItem === "/listemployeeadvancepayments"
                          ? "active"
                          : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Advance Payment
                    </Link>
                  </li>
                  <li onClick={togglePage3}>
                    <Link
                      to="/listemployeeexpenses"
                      className={` link4 ${
                        activeItem === "/listemployeeexpenses" ? "active" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Expense
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="lg">
        <Link to="/loginpage" className="linklogout">
          <div className="logout d-flex">
            <LogoutOutlinedIcon sx={{ fontSize: 20 }} className="icon" />
            <div className="fw-large lout">Logout</div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarManager;
