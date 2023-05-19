import React from "react";
import Background from "../../assets/images/forgot-password.svg";
import "./forgotPasswordPage.scss";
import backarrow from "../../assets/images/backarrow.png";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
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
            />
            <label htmlFor="name" className="form__label">
              E-Mail
            </label>
          </div>
          <div className="button-part">
            <button className="button">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
