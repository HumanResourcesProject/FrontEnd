import React, { useState, useContext } from "react";
import "./loginpage.scss";
import AuthService from "../../service/AuthService";
import AuthContext from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [errorTextMail, setErrorTextMail] = useState("");
  const [errorTextPassword, setErrorTextPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setErrorTextMail("");
    setErrorTextPassword("");
    
    if (user.email === "") {
      setErrorTextMail("Email empty");
      setError(true);
      return;
    }

    if (user.password === "") {
      setErrorTextPassword("Password empty");
      setError(true);
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
            window.location.replace("http://localhost:3000/admin");
          } else if (response.data.role === "MANAGER") {
            window.location.replace("http://localhost:3000/manager");
          } else if (response.data.role === "EMPLOYEE") {
            window.location.replace("http://localhost:3000/employee");
          }
          //navigate le sayfa değişir
        }
      })
      .catch((error) => {
        alert("Unexpected Error");
      });
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
            <form onSubmit={handleSubmit}>
              <div className="form__group2">
                <input
                  type="input"
                  className="form__field2"
                  placeholder="Username"
                  name="name"
                  id="name"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
                <label htmlFor="name" className="form__label2">
                  E-Mail
                </label>
                {error && <p style={{ color: "red" }}>{errorTextMail}</p>}
              </div>
              <div className="form__group2">
                <input
                  type="input"
                  className="form__field2"
                  placeholder="Username"
                  name="name"
                  id="name"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
                <label htmlFor="name" className="form__label2">
                  Password
                </label>
                {error && <p style={{ color: "red" }}>{errorTextPassword}</p>}
              </div>
            </form>
            <Link to="/forgotpassword" className="linkforgot">
              <div className="forgot-password">Forgot Password?</div>
            </Link>
          </div>
          <div className="button-part">
            <button onClick={handleSubmit} className="button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
