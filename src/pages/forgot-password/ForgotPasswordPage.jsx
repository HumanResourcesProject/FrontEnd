import React from "react";
import { useState, useEffect } from "react";
import "./forgotPasswordPage.scss";
import backarrow from "../../assets/images/backarrow.png";
import { Link } from "react-router-dom";
import AuthService from "../../service/AuthService"

const ForgotPasswordPage = () => {
  const [data,setData] = useState({
    role:"",
    email:"",
    password:"",
  });
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(data.email !== "" && data.email.includes("@")){
      AuthService.forgotPassword(data).then((response) =>{
        alert("Nice")
      })
      .catch((error) =>{
        alert("Error")
      })
    }

  }
  return (
    <div className="forgot-container">
      <div className="background-part"></div>
      <div className="right-part">
        <div className="backarrow">
          <Link to="/" className="link">
            <img src={backarrow} alt="backarrow" className="image" />
            <span className="login-text">Login</span>
          </Link>
        </div>
        <div className="reset-part">
          <div className="text-part">
            <h2 className="h2">Reset your password</h2>
            <p className="p">
              Strong passwords include numbers,letters,and punctuation marks.
            </p>
          </div>
          <div className="form__group">
            <input
              type="input"
              className="form__field"
              placeholder="Username"
              name="name"
              id="name"
              required
              onChange={(e)=>
              setData({
                ...data,
                email: e.target.value,
              })}
            />
            <label htmlFor="name" className="form__label">
              E-Mail
            </label>
          </div>
          <div className="button-part">
            <button onClick={handleSubmit} className="button">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
