import React from "react";
import "./managerMain.scss";
import { useState, useEffect } from "react";

const MainPage = () => {
  return (
    <div className="manager-main-container">
      <div className="small-boxes">
        <div className="box">
          <div className="box-left">
            <div className="upper">352</div>
            <div className="lower">Invoice Sent</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">352</div>
            <div className="lower">Invoice Sent</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">352</div>
            <div className="lower">Invoice Sent</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
        <div className="box">
          <div className="box-left">
            <div className="upper">352</div>
            <div className="lower">Invoice Sent</div>
          </div>
          <div className="box-right">
            <img
              src="https://img.icons8.com/?size=512&id=cD26kdwTbCzt&format=png"
              className="icon"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="middle-part">
        <div className="left-part">
          <div className="title-part">
            <p className="title">Best Seller</p>
            <p className="extra">...</p>
          </div>
          <div className="employees">
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">Pete Sariya</p>
                  <p className="date"> 24 jan, 2020</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">157</div>
              </div>
            </div>
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">Pete Sariya</p>
                  <p className="date"> 24 jan, 2020</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">157</div>
              </div>
            </div>
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">Pete Sariya</p>
                  <p className="date"> 24 jan, 2020</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">157</div>
              </div>
            </div>
            <div className="employee-chart">
              <div className="employee-detail">
                <img
                  className="employee-avatar"
                  src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                  alt=""
                />
                <div className="employee-text">
                  <p className="name">Pete Sariya</p>
                  <p className="date"> 24 jan, 2020</p>
                </div>
              </div>
              <div className="grade">
                <div className="number">157</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="annual-box">
            <div className="expenses-title">Monthly Expenses</div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src="https://img.icons8.com/?size=512&id=63986&format=png"
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Camelun ios</div>
                  <div className="text-bottom">
                    <div className="colored-text">17/23</div>
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">16,634.00</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src="https://img.icons8.com/?size=512&id=63986&format=png"
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Camelun ios</div>
                  <div className="text-bottom">
                    <div className="colored-text">17/23</div>
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">16,634.00</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
          </div>
          <div className="annual-box">
            <div className="expenses-title">Monthly Expenses</div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src="https://img.icons8.com/?size=512&id=63986&format=png"
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Camelun ios</div>
                  <div className="text-bottom">
                    <div className="colored-text">17/23</div>
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">16,634.00</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
            <div className="expenses-data">
              <div className="left-side">
                <img className="money-img"
                  src="https://img.icons8.com/?size=512&id=63986&format=png"
                  alt=""
                />
                <div className="text">
                  <div className="text-top">Camelun ios</div>
                  <div className="text-bottom">
                    <div className="colored-text">17/23</div>
                    <div className="normal-text">months paid</div>
                  </div>
                </div>
                
              </div>
              <div className="right-side">
                <div className="text-top">
                  <img
                  className="dolar-img"
                    src="https://img.freepik.com/free-vector/illustration-financial-concept_53876-5917.jpg?w=826&t=st=1684685717~exp=1684686317~hmac=56e31a295c3f133a085f5574eea18c60d6a5513587a2958ee77fe68d01eddd1e"
                    alt=""
                  />
                  <div className="amount">16,634.00</div>
                </div>
                <div className="text-bottom">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
