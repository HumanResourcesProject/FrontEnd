import React from "react";
import "./employeeMyProfile.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState, useEffect } from "react";
import EmployeeService from "../../service/EmployeeService";

const EmployeeMyProfile = () => {
  const [profile, setProfile] = useState({ data: {} });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeInformations(token);
        setProfile(response);
        setUpdate({ ...update,phone: response.data.phone,address: response.data.address,token: sessionStorage.getItem("token") });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [update, setUpdate] = useState({
    token: "",
    avatar: "",
    phone: "",
    address: "",
  });
  const [token, setToken] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });
  const [image, setImage] = useState("");
  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setUpdate({ ...update, avatar: file });
    setImage(file);
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdate({...update,avatar:null})
    console.log(typeof update.avatar);
    if(update.avatar === null ){
      console.log(update);
      alert("stringdeyiz")
      EmployeeService.updateEmployeeInformationsString(update).then((response) => {
        alert("Updated successfully!");
      })
      .catch((error) => {
        alert("unexpected error");
      });
    }else{
      EmployeeService.updateEmployeeInformations(update)
      .then((response) => {
        alert("Updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("unexpected error");
      });
    } 
    
  };

  return (
    <div className="employee-profile-body">
      <div className="avatar-part">
        {image ? (
          <img
            className="avatar"
            src={URL.createObjectURL(image)}
            alt="Rengoku"
          />
        ) : (
          <img
            className="avatar"
            src={
              profile.data.avatar ||
              "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
            }
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
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.identityNumber || ""}
            />
          </div>
          <div className="input">
            <label className="text">Name</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.name || ""}
            />
          </div>

          <div className="input">
            <label className="text">Middle Name</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.middleName || ""}
            />
          </div>
          <div className="input">
            <label className="text">Surname</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.surname || ""}
            />
          </div>
          <div className="input">
            <label className="text">Date of Birth</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.birthDate || ""}
            />
          </div>
          <div className="input">
            <label className="text">Date of Place</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.birthPlace || ""}
            />
          </div>
          <div className="input">
            <label className="text">Job Start</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue="değişcek"
            />
          </div>
        </div>
        <div className="right-part">
          <div className="input">
            <label className="text">Occupation</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.occupation || ""}
            />
          </div>
          <div className="input">
            <label className="text">Department</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.department || ""}
            />
          </div>
          <div className="input">
            <label className="text">Email</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.email || ""}
            />
          </div>
          <div className="input">
            <label className="text">Phone *</label>
            <input
              className="editable"
              type="text"
              defaultValue={profile.data.phone || ""}
              onChange={(event) => {
                setUpdate({
                  ...update,
                  phone: event.target.value,
                });
              }}
            />
          </div>
          <div className="input">
            <label className="text">Address *</label>
            <input
              className="editable"
              type="text"
              defaultValue={profile.data.address || ""}
              onChange={(event) => {
                setUpdate({
                  ...update,
                  address: event.target.value,
                });
              }}
            />
          </div>
          <div className="input">
            <label className="text">Company</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.company || ""}
            />
          </div>
          <div className="input">
            <label className="text">Salary</label>
            <input
              readOnly
              className="detail-input"
              type="text"
              defaultValue={profile.data.salary || ""}
            />
          </div>
        </div>
      </div>
      <div className="button-part">
        <button onClick={handleSubmit} className="button-change">Change</button>
      </div>
    </div>
  );
};

export default EmployeeMyProfile;
