import React from "react";

import "./card.scss";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Card = ({userData}) => {
  return (
      <div className="widget-user-mini">
        <div className="widget-user-header-mini ">
          <h3 className="widget-user-username-mini">{userData.name}</h3>
          <h5 className="widget-user-desc-mini">Admin</h5>
        </div>
        <div className="img-cropper-mini">
          <img
            className="img-circle-mini"
            src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="User Avatar"
          />
        </div>
        <div className="card-footer-mini">
          <div className="card-footer-row-mini">
            <div className="description-block-mini">
              <MailOutlineIcon className="mailicon cardicons" />
            </div>

            <div className="description-block-mini border-leftright-mini">
              <ManageAccountsIcon className="manageicon cardicons" />
            </div>

            <div className="description-block-mini">
              <DeleteIcon className="deleteicon cardicons" />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Card;
