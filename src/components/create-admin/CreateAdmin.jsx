import React from "react";
import { useState } from "react";
import "./createAdmin.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AuthService from "../../service/AuthService";
import EmailInput from "../email-input/EmailInput";
import AdminCreateImage from "../../assets/images/Admin_Create_Image.svg"

const CreateAdmin = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
    token: sessionStorage.getItem("token"),
  });
  const [image, setImage] = useState("");

  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    if (
      image ===
      "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
    ) {
      const newImage = URL.createObjectURL(image);
      setAdminInfo({
        ...adminInfo,
        avatar: newImage,
      });
    }
    console.log(adminInfo);
    AuthService.registerAdmin(adminInfo)
      .then(() => {
        alert("added successfully *****");
      })
      .catch((error) => {
        alert("unexpected error");
      });
  };

  return (
    <div className="register">
      <div className="left-part">
      <div className="register-photo-section">
        {image ? (
          <img className="register-avatar" src={URL.createObjectURL(image)} />
        ) : (
          <img
            className="register-avatar"
            src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
            alt="Rengoku"
          />
        )}
        <div className="register-buttons">
          <label htmlFor="file" className="choosefilebutton">
            <DriveFolderUploadIcon className="uploadicon" />
            Choose Avatar
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={onchangeImage}
          />
        </div>
      </div>
      <div className="register-profil-info">
        <form onSubmit={handleCreate}>
          <div className="input-data">
            <label className="text" htmlFor="ad">Name</label>
            <input
              // pattern="[a-zA-Z]{1,15}"
              // title="Please enter a valid name"
              required
              type="text"
              onChange={(e) =>
                setAdminInfo({
                  ...adminInfo,
                  name: e.target.value,
                })
              }
            />{" "}
          </div>

          <div className="input-data">
            <label className="text" htmlFor="soyad">Surname</label>
            <input
              // pattern="[a-zA-Z]{1,15}"
              // title="Please enter a valid surname"
              type="text"
              required
              onChange={(e) =>
                setAdminInfo({
                  ...adminInfo,
                  surname: e.target.value,
                })
              }
            />{" "}
          </div>

          <div className="input-data">
            <label className="text" htmlFor="email">E-mail</label>
            <input
              type="text"
              required
              onChange={(e) =>
                setAdminInfo({
                  ...adminInfo,
                  email: e.target.value,
                })
              }  />
            
          </div>

          <div className="input-data">
            <label className="text" htmlFor="phone">Phone Number</label>
            <input
              // pattern="^[0-9]{9,11}$"
              // title="Please enter a valid phone"
              type="tel"
              required
              onChange={(e) =>
                setAdminInfo({
                  ...adminInfo,
                  phone: e.target.value,
                })
              }
            />
          </div>

          <div className="input-data">
            <label className="text" htmlFor="address">Address</label>
            <input
              type="text"
              onChange={(e) =>
                setAdminInfo({
                  ...adminInfo,
                  address: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            onClick={(e) =>
              setAdminInfo({
                ...adminInfo,
                avatar: image,
              })
            }
          >
            Create
          </button>
        </form>
      </div>
      
      </div>
      <div className="right-part">
          <img src= {AdminCreateImage} alt="" />
      </div>
    </div>
  );
};
export default CreateAdmin;
