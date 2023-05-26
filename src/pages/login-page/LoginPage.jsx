import React, { useState, useContext } from "react";
import "./loginpage.scss";
import AuthService from "../../service/AuthService";
import AuthContext from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [errorTextMail, setErrorTextMail] = useState("");
  const [errorTextPassword, setErrorTextPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    role:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
      setError(true);
      setErrorTextMail("Email and password are required");
      return;
    }

    AuthService.login(user)
      .then((response) => {
        console.log(response);
        if (response.data.code === "You have entered an invalid parameter") {
          alert("Wrong email or password");
        } else {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("role", response.data.role);
          if (response.data.role === "ADMIN") {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              width: '400',
              height: '150',
              title: 'Successful entry',
              showConfirmButton: false,
              timer: 1500
            })
            setTimeout(function() {
              window.location.replace("http://34.88.131.152:3000/admin");
            }, 1500);
          } else if (response.data.role === "MANAGER") {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              width: '400',
              height: '150',
              title: 'Successful entry',
              showConfirmButton: false,
              timer: 1500
            });
            
            setTimeout(function() {
              window.location.replace("http://34.88.131.152:3000/manager");
            }, 1500);
          } else if (response.data.role === "EMPLOYEE") {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              width: '400',
              height: '150',
              title: 'Successful entry',
              showConfirmButton: false,
              timer: 1500
            });
            
            setTimeout(function() {
              window.location.replace("http://34.88.131.152:3000/employee");
            }, 1500);
          }
          //navigate le sayfa değişir
        }
      })
      .catch((error) => {
        alert("oooo")
        Swal.fire({
          title: 'Invalid Login',
          text: 'Please check the values you entered',
          width: '400',
          height: '400',
          imageUrl: 'https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?w=826&t=st=1684682338~exp=1684682938~hmac=4875a35809cd122ac30985a1b47f1aa39d99d714605152608b2465f0300c1c27',
          imageWidth:200,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
      });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
    setError(false);
    setErrorTextMail("");
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
    setError(false);
    setErrorTextPassword("");
  };

  return (
    <div className="login-container">
      <div className="background-part"></div>
      <div className="login-part">
        <div className="login-right">
          <div className="top-text">
            <h2>Welcome Back...</h2>
            <p>“Opportunities don't happen, you create them.”</p>
          </div>
          <div className="login-inputs">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form__group2">
                <input
                  pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
                  type="email"
                  title="Please enter a valid email address"
                  className="form__field2"
                  placeholder="."
                  name="email"
                  id="email"
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="email" className="form__label2">
                  E-Mail
                </label>
              </div>
              <div className="form__group2">
                <input
                  type="password"
                  className="form__field2"
                  placeholder="."
                  name="password"
                  id="password"
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="password" className="form__label2">
                  Password
                </label>
              </div>
              <div className="forgot-div">
                <Link to="/forgotpassword" className="linkforgot">
                  <div className="forgot-password">Forgot Password?</div>
                </Link>
              </div>
             
             <div className="button-part">
              <button type="submit" className="button">
                Login
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;