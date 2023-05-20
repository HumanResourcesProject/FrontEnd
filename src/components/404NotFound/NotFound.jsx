import { Button } from "@mui/material";
import "./notfound.scss";
import { Link } from "react-router-dom";

import React from "react";

const NotFound = () => {
  return (
    <div className="notfoundbody">
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to="/loginpage">
          <a
            target="_blank"
            href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
            className="more-link"
          >
            Back To Login Page{" "}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
