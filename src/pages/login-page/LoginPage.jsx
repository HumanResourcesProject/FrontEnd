import React, {useState} from "react";
import "./loginpage.scss";
import loginpage from "../../images/19197061.jpg";
import { Link } from "react-router-dom";


export const LoginPage = () => {
    const[user,setUser] = useState({
        email: "",
        password: "",
    });
    //AUTH SERVICE GELINCE BAGLANCAK !!!! SESSION STORAGE a response dan gelen token ı yollıcaz
    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }
  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="login-left">
          <img src={loginpage} alt="loginpageimage" />
        </div>
        <div className="login-right">
          <div className="top-text">
            <h2>Welcome Back...</h2>
            <p>“Opportunities don't happen, you create them.”</p>
          </div>
          <div className="login-inputs">
            <form onSubmit={handleSubmit}>
              
              <div className="group">
                <input 
                type="text"
                onChange={(e) => setUser({ ...user, email: e.target.value})} 
                required
                 />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
                
                
              </div>
              <div className="group">
                <input 
                type="text" 
                onChange={(e) => setUser({ ...user, email: e.target.value})} 
                required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Password</label>
                <div className="forgot-password">Forgot Password?</div>
              </div>

            </form>
          </div>
          <div className="login-bottom">
            <Link to="/">
              <button className="raise">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
