import React from "react";
import "./mainpage.scss";

const MainPage = () => {
  return (
    <div className="maincontainer">
        <div className="card card-widget widget-user">
          <div className="widget-user-header bg-info">
            <h3 className="widget-user-username">Alexander Pierce</h3>
            <h5 className="widget-user-desc">Founder & CEO</h5>
          </div>
          <div className="widget-user-image">
            <img
              className="img-circle elevation-2"
              src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
            />
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-sm-4 border-right">
                <div className="description-block">
                  <h5 className="description-header">3,200</h5>
                  <span className="description-text">SALES</span>
                </div>
              </div>
              <div className="col-sm-4 border-right">
                <div className="description-block">
                  <h5 className="description-header">13,000</h5>
                  <span className="description-text">FOLLOWERS</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="description-block">
                  <h5 className="description-header">35</h5>
                  <span className="description-text">PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MainPage;
