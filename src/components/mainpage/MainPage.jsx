import React from "react";
import "./mainpage.scss";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MainPage = () => {
  return (
    <div className="maincontainer">
      <div className="widget-user">
        <div className="widget-user-header bg-info">
          <h3 className="widget-user-username">Alexander Pierce</h3>
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
                <h5 className="description-header">3,200</h5>
                <p className="description-text">SALES</p>
              </div>

              <div className="description-block border-leftright">
                <h5 className="description-header">13,000</h5>
                <p className="description-text">FOLLOWERS</p>
              </div>

              <div className="description-block">
                <h5 className="description-header">35</h5>
                <p className="description-text">PRODUCTS</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
