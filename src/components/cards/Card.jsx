import React from "react";
import { unstable_styleFunctionSx } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import "./card.scss";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import styled from "@emotion/styled";

const Card = ({company}) => {


  return (
    <div className="widget-user-mini">
      <div className="widget-user-header-mini ">
        <h3 className="widget-user-username-mini"></h3>
        <h5 className="widget-user-desc-mini">{company.name}</h5>
      </div>
      <div className="img-cropper-mini">
        <img
          className="img-circle-mini"
            src={company.logo}
          alt="User Avatar"
        />
      </div>
      <div className="card-footer-mini">
        <div className="card-footer-row-mini">
          <div className="description-block-mini">
          {company.phone}
          </div>

          <div className="description-block-mini border-leftright-mini">
          {company.email}
          </div>

          <div className="description-block-mini">
          {company.address}          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
