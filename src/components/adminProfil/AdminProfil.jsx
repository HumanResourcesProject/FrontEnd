import React from "react";
import { useState, useEffect } from "react";
import "./adminProfil.scss";
import AdminService from "../../service/AdminService";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Swal from "sweetalert2";
import EditIcon from '@mui/icons-material/Edit';
import ProfileImage from "../../assets/images/Admin_MyProfileImage.svg"

const AdminProfil = () => {
  const [profile, setProfile] = useState({ data: {} });
  useEffect(() => {

    AdminService.getAdminInformations(token)
    .then((response) => {
      setAdmin(response.data);
    }).catch((error)=>{
      console.log(error);
    });

    const fetchData = async () => {
      try {
        const response = await AdminService.getAdminInformations(token);
        setProfile(response);
        setUpdate({
          ...update,
          phone: response.data.phone,
          address: response.data.address,
          token: sessionStorage.getItem("token"),
        });
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
    setIsActive(true);
    const file = e.target.files[0];
    setUpdate({ ...update, avatar: file });
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (update.avatar === "") {
      AdminService.updateAdminInformationsString(update)
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            width: "400",
            height: "150",
            title: "Updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(function () {
            window.location.reload(false);
          }, 1500);
        })
        .catch((error) => {
          alert("unexpected error");
        });
    } else {
      AdminService.updateAdminInformations(update)
        .then((response) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            width: "400",
            height: "150",
            title: "Updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(function () {
            window.location.reload(false);
          }, 1500);
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            width: "400",
            height: "150",
            title: "Updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(function () {
            window.location.reload(false);
          }, 1500);
        });
    }
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsActive(true);
  };

  return (
    <div className="admin-profile-body">
      <div className="left">
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
        <div className="detail-part">
          <div className="left-part">
            <div className="input">
              <label className="text">Name</label>
              <p className="detail-p">{profile.data.name || "-"}</p>
            </div>

            <div className="input">
              <label className="text">Surname</label>
              <p className="detail-p">{profile.data.surname || "-"}</p>
            </div>
            <div className="input">
              <label className="text">Email</label>
              <p className="detail-p">{profile.data.email || "-"}</p>
            </div>
            <div className="input">
              <label className="text">Phone <EditIcon sx={{fontSize:15}} /></label>
              <input
                className="editable"
                onClick={handleClick}
                type="text"
                placeholder={profile.data.phone || "-"}
                onChange={(event) => {
                  setUpdate({
                    ...update,
                    phone: event.target.value,
                  });
                }}
              />
            </div>

            <div className="input">
              <label className="text">Address <EditIcon sx={{fontSize:15}} /></label> 
              
              <input
                className="editable"
                onClick={handleClick}
                type="text"
                placeholder={profile.data.address || "-"}
                onChange={(event) => {
                  setUpdate({
                    ...update,
                    address: event.target.value,
                  });
                }}
              />
            </div>
            {/* <div className="input">
            <label className="text">Company</label>
            <input
              disabled
              className="detail-input"
              type="text"
              defaultValue={profile.data.company || ""}
            />
          </div> */}
          </div>
        </div>
        {isActive === true ? (
          <div className="button-part">
            <button onClick={handleSubmit} className="button-change">
              Save The Changes
            </button>
          </div>
        ) : null}
      </div>
      <div className="right">
        <img className="admin-profil-image" src= {ProfileImage} alt="" />
      </div>
    </div>
  );
};
export default AdminProfil;
