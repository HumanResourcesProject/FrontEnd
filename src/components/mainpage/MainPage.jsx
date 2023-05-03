import React from "react";
import "./mainpage.scss";
import { useState } from "react";

const MainPage = () => {
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

      <div className="minicontainer">
        <div className="widget-user-mini">
          <div className="widget-user-header-mini bg-info">
            <h3 className="widget-user-username-mini">Alexander Pierce</h3>
            <h5 className="widget-user-desc-mini">Founder & CEO</h5>
          </div>
          <div className="img-cropper-mini">
            <img
              className="img-circle-mini"
              src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
            />
          </div>
          <div className="card-footer-mini">
            <div className="card-footer-row-mini">
              <div className="description-block-mini">
                <h5 className="description-header-mini">3,200</h5>
                <p className="description-text-mini">SALES</p>
              </div>

              <div className="description-block-mini border-leftright-mini">
                <h5 className="description-header-mini">13,000</h5>
                <p className="description-text-mini">FOLLOWERS</p>
              </div>

              <div className="description-block-mini">
                <h5 className="description-header-mini">35</h5>
                <p className="description-text-mini">PRODUCTS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-user-mini">
          <div className="widget-user-header-mini bg-info">
            <h3 className="widget-user-username-mini">Alexander Pierce</h3>
            <h5 className="widget-user-desc-mini">Founder & CEO</h5>
          </div>
          <div className="img-cropper-mini">
            <img
              className="img-circle-mini"
              src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
            />
          </div>
          <div className="card-footer-mini">
            <div className="card-footer-row-mini">
              <div className="description-block-mini">
                <h5 className="description-header-mini">3,200</h5>
                <p className="description-text-mini">SALES</p>
              </div>

              <div className="description-block-mini border-leftright-mini">
                <h5 className="description-header-mini">13,000</h5>
                <p className="description-text-mini">FOLLOWERS</p>
              </div>

              <div className="description-block-mini">
                <h5 className="description-header-mini">35</h5>
                <p className="description-text-mini">PRODUCTS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-user-mini">
          <div className="widget-user-header-mini bg-info">
            <h3 className="widget-user-username-mini">Alexander Pierce</h3>
            <h5 className="widget-user-desc-mini">Founder & CEO</h5>
          </div>
          <div className="img-cropper-mini">
            <img
              className="img-circle-mini"
              src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
            />
          </div>
          <div className="card-footer-mini">
            <div className="card-footer-row-mini">
              <div className="description-block-mini">
                <h5 className="description-header-mini">3,200</h5>
                <p className="description-text-mini">SALES</p>
              </div>

              <div className="description-block-mini border-leftright-mini">
                <h5 className="description-header-mini">13,000</h5>
                <p className="description-text-mini">FOLLOWERS</p>
              </div>

              <div className="description-block-mini">
                <h5 className="description-header-mini">35</h5>
                <p className="description-text-mini">PRODUCTS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-user-mini">
          <div className="widget-user-header-mini bg-info">
            <h3 className="widget-user-username-mini">Alexander Pierce</h3>
            <h5 className="widget-user-desc-mini">Founder & CEO</h5>
          </div>
          <div className="img-cropper-mini">
            <img
              className="img-circle-mini"
              src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
            />
          </div>
          <div className="card-footer-mini">
            <div className="card-footer-row-mini">
              <div className="description-block-mini">
                <h5 className="description-header-mini">3,200</h5>
                <p className="description-text-mini">SALES</p>
              </div>

              <div className="description-block-mini border-leftright-mini">
                <h5 className="description-header-mini">13,000</h5>
                <p className="description-text-mini">FOLLOWERS</p>
              </div>

              <div className="description-block-mini">
                <h5 className="description-header-mini">35</h5>
                <p className="description-text-mini">PRODUCTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
