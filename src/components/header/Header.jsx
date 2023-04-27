import React from "react";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbarleftside">
        <MenuIcon className="menuicon" />
        <p>Home</p>
      </div>
      <div className="navbarrightside">
        <SearchOutlinedIcon className="searchicon" />
        <DarkModeOutlinedIcon className="darkmodeicon" />
        <div className="navbarprofile">
          <AccountCircleOutlinedIcon />
          <p>Mahmut Tuncer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
