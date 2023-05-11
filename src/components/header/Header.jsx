import React,{useState,useEffect}from "react";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AdminService from '../../service/AdminService';

const Header = () => {

  const [profil, setProfil] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token")
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
    <div className="navbar">
      <div className="navbarleftside">
        <MenuIcon className="menuicon" />
        <p>Home</p>
      </div>
      <div className="navbarrightside">
        <SearchOutlinedIcon className="searchicon" />
        <DarkModeOutlinedIcon className="darkmodeicon" />
        <div className="navbarprofile">
          <img src={profil.avatar} alt="" />
          <p>{profil.name+" "+profil.surname}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
