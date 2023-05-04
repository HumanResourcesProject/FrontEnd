import React from "react";
import CardList from "../cards/CardList";
import "./mainpage.scss";
import { useState , useEffect} from "react";
import AdminService from '../../service/AdminService';


const MainPage = () => {
  const [data2,setData] = useState([])
  useEffect(() => {
    AdminService.getAllAdmins().then((response) => {
      setData(() => (response.data
      ));
      
    });
  }, []);

  return (
    <div className="maincontainer">
      <div className="widget-user">
        <div className="widget-user-header">
          <h3 className="widget-user-username">Mahmut Tuncer</h3>
          <h5 className="widget-user-desc">Founder & CEO</h5>
        </div>
        <div className="img-cropper">
          <img
            className="img-circle"
            src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="User Avatar"
          />
        </div>
        <div className="card-footer">
          <div className="card-footer-row">
            <div className="description-block">
              <h5 className="description-header">Email</h5>
              <p className="description-text">mahmuttuncer@gmail.com</p>
            </div>

            <div className="description-block border-leftright">
              <h5 className="description-header">Phone</h5>
              <p className="description-text">+905551231122</p>
            </div>

            <div className="description-block">
              <h5 className="description-header">Address</h5>
              <p className="description-text">Keçiören,Ankara</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomline">      
      </div>
       <CardList people={data2} />  
    </div>
  );
};

export default MainPage;
