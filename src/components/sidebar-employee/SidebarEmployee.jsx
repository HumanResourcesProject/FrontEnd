import React, { useState, useEffect } from "react";
import "./sidebarEmployee.scss";
import { Link, useLocation  } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import lettere from "../../assets/images/lettere.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BackupTableIcon from '@mui/icons-material/BackupTable';

const SidebarEmployee = () => {
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
      location.pathname === "/employeeaddleave" ||
      location.pathname === "/employeeadvancepayment" ||
      location.pathname === "/employeeexpense"
    ) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [location]);
  
  // ... previous code ...
  
  

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
              <Link to="/listallemployees" className={`link d-flex ${
                  activeItem === "/listallemployees" ? "active" : ""
                }`}>
                <GroupsIcon />
                <div>Employee List</div>
              </Link>
            </li>
            <li>
              <Link to="/employeelistleave" className={`link d-flex ${
                  activeItem === "/employeelistleave" ? "active" : ""
                }`}>
                <BackupTableIcon />
                <div>Request History</div>
              </Link>
            </li>
            <li className="requestli">
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
                <div>Create Request</div>
              </div>

              {isDropdownOpen && (
                <ul className="dropdown-menu-employee">
                  <li onClick={togglePage1}>
                    <Link
                      to="/employeeaddleave"
                      className={` link2-employee ${
                        activeItem === "/employeeaddleave" ? "active" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      Leave
                    </Link>
                  </li>
                  <li onClick={togglePage2}>
                    <Link
                      to="/employeeadvancepayment"
                      className={`link3-employee  ${
                        activeItem === "/employeeadvancepayment"
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
                      to="/employeeexpense"
                      className={` link4-employee ${
                        activeItem === "/employeeexpense" ? "active" : ""
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
            <LogoutOutlinedIcon style={{ fontSize: 20  }} />
            <div className="fw-large lout">Logout </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
export default SidebarEmployee;
