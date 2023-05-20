import React,{useState,useEffect}from "react";
import "./headerEmployee.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmployeeService from '../../service/EmployeeService';

const HeaderEmployee = ({ onToggleSidebar }) => {

  const [profil, setProfil] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token")
  });
  
  const profilpart = () => {
    EmployeeService.getEmployeeInformations(token).then((response) => {
      setProfil(response.data);
    });
  };

  useEffect(() => {
    profilpart();
  }, []);

  return (
    <div className="navbar">
      <div className="navbarleftside">
        <MenuIcon onClick={onToggleSidebar} className="menuicon" />
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

export default HeaderEmployee;
