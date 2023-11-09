import React from "react";
import "./card.scss";

const Card = ({ company }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img className="img-content-img" src={company.logo} />
          <h3 className="img-content-h3">{company.name}</h3>
        </div>
        <div className="content">
          <p className="heading">{company.name}</p>
          <div className="content-mini">
            <p className="content-mini-p">Phone: </p>
            <p className="content-mini-var">{company.phone}</p>
          </div>
          <div className="content-mini">
            <p className="content-mini-p">Email: </p>
            <p className="content-mini-var">{company.email}</p>
          </div>
          <div className="content-mini">
            <p className="content-mini-p">Address: </p>
            <p className="content-mini-var">{company.address}</p>
          </div>
          <div className="content-mini">
            <p className="content-mini-p">Number of Employees: </p>
            <p className="content-mini-var">{company.calisanSayisi}</p>
          </div>
          <div className="content-mini">
            <p className="content-mini-p">Year of Establishment: </p>
            <p className="content-mini-var">{company.kurulusYili}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
