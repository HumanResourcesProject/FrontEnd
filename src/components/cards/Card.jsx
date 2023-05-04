import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

import "./card.scss";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Card = ({ userData }) => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div className="widget-user-mini">
      <div className="widget-user-header-mini ">
        <h3 className="widget-user-username-mini">{userData.name}</h3>
        <h5 className="widget-user-desc-mini">Founder & CEO</h5>
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
            <MailOutlineIcon
              className="mailicon cardicons"
              onClick={handleClick}
            />
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box>
                      <p className="popperheader">Phone:</p>
                      <p className="popperexplain">{userData.phone}</p>
                      <p className="popperheader">Email:</p>
                      <p className="popperexplain">{userData.email}</p>
                    </Box>
                  </Fade>
                )}
              </Popper>
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
