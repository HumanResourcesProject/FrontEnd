import React from "react";
import "./employeeMyProfile.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState, useEffect } from "react";

const EmployeeMyProfile = () => {
  const [profile, setProfile] = useState({
    token: sessionStorage.getItem("token"),
    avatar: "",
    phone: "TL",
    address: "",
  });
  const [image, setImage] = useState("");
  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, invoiceUrl: file });
    setImage(file);
  };

  return (
    <div className="employee-profile-body">
      <div className="avatar-part">
        {image ? (
          <img className="avatar" src={URL.createObjectURL(image)} />
        ) : (
          <img
            className="avatar"
            src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
            alt="Rengoku"
          />
        )}

        <label htmlFor="file" className="choosefilebutton">
          <DriveFolderUploadIcon className="uploadicon" />
          Change Avatar
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={onchangeImage}
        />
      </div>
      <div className="lower-part">
        <div className="left-part">
          <div className="input">
            <label className="text">IdentityNumber</label>
            <input readOnly className="detail-input" type="text" defaultValue="1234" />
          </div>
          <div className="input">
            <label className="text">Name</label>
            <input readOnly className="detail-input" type="text" defaultValue="Mert" />
          </div>

          <div className="input">
            <label className="text">Middle Name</label>
            <input readOnly className="detail-input" type="text" defaultValue="middleName" />
          </div>
          <div className="input">
            <label readOnly className="text">Surname</label>
            <input className="detail-input" type="text" defaultValue="Namsal" />
          </div>
          <div className="input">
            <label readOnly className="text">Date of Birth</label>
            <input className="detail-input" type="text" defaultValue="26-01-1999" />
          </div>
          <div className="input">
            <label readOnly className="text">Date of Place</label>
            <input className="detail-input" type="text" defaultValue="Izmir" />
          </div>
          <div className="input">
            <label readOnly className="text">Job Start</label>
            <input className="detail-input" type="text" defaultValue="21-06-2023" />
          </div>
        </div>
        <div className="right-part">
          <div className="input">
            <label  className="text">Occupation</label>
            <input readOnly className="detail-input" type="text" defaultValue="Developer" />
          </div>
          <div className="input">
            <label  className="text">Department</label>
            <input readOnly className="detail-input" type="text" defaultValue="IT" />
          </div>
          <div className="input">
            <label  className="text">Email</label>
            <input readOnly className="detail-input" type="text" defaultValue="namsalmert@gmail.com" />
          </div>
          <div className="input">
            <label className="text">Phone *</label>
            <input  className="editable" type="text" defaultValue="053616546456" />
          </div>
          <div className="input">
            <label className="text">Address *</label>
            <input className="editable" type="text" defaultValue="Izmir" />
          </div>
          <div className="input">
            <label  className="text">Company</label>
            <input readOnly className="detail-input" type="text" defaultValue="Garanti BBVA" />
          </div>
          <div className="input">
            <label  className="text">Salary</label>
            <input readOnly className="detail-input" type="text" defaultValue="5000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMyProfile;
