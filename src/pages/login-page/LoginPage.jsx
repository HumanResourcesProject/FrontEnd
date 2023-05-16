import React, {useState, useContext} from "react";
import "./loginpage.scss";
import loginpage from "../../images/19197061.jpg";
import AuthService from "../../service/AuthService";
import AuthContext from "../../context/AuthProvider";

export const LoginPage = () => {
    const {setAuth} = useContext(AuthContext);
    const[user,setUser] = useState({
        email: "",
        password: "",
    });
    const[error,setError] = useState({
      emailError: "",
      passwordError: "",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user);
        if(user.email === ""){
          setError({...error, emailError: "E-mail can't be empty"})
          return;
        }
        if(user.password === ""){
          setError({...error, passwordError: "Password can't be empty"})
          return;
        }
        
        AuthService.login(user).then((response)=>{
          console.log(response);
          if(response.data.code === "You have entered an invalid parameter"){
            alert("Wrong email or password")
          }else{
              sessionStorage.setItem("token",response.data.token)
              sessionStorage.setItem("role",response.data.role)
              if(response.data.role === "ADMIN"){
                window.location.replace("http://localhost:3000/admin")
              }else if(response.data.role === "MANAGER")
              {
                window.location.replace("http://localhost:3000/manager")
              }else if(response.data.role === "EMPLOYEE"){
                window.location.replace("http://localhost:3000/employee")
              }
               //navigate le sayfa değişir 
              
              
          }
        }).catch((error)=> {
          alert("Unexpected Error");
          
        });
        
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
                <div className="error-email">{error.emailError}</div>
                
                
              </div>
              <div className="group">
                <input 
                type="text" 
                onChange={(e) => setUser({ ...user, password: e.target.value})} 
                required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Password</label>
                <div className="error-password">{error.passwordError}</div>
                <div className="forgot-password">Forgot Password?</div>
              </div>

            </form>
          </div>
          <div className="login-bottom">
            
              <button className="raise" onClick={handleSubmit}>Sign Up</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
