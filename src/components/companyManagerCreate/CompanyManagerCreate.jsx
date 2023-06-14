import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./companyManagerCreate.scss";
import AuthService from "../../service/AuthService";
import CompanyService from "../../service/CompanyService";

import ImageManager from "../../assets/images/ManagerRegister.svg"
import Swal from 'sweetalert2';

const CompanyManagerCreate = () => {
  const [managerInfo, setManagerInfo] = useState({
    identityNumber: "",
    name: "",
    middleName: "",
    surname: "",
    birthDate: "",
    email: "",
    address: "",
    phone: "",
    company: "",
    occupation: "",
    birthPlace: "",
    jobStart: "",
    department: "",
    avatar: "",
    token: sessionStorage.getItem("token"),
    
  });
  
  // For Image ********
  const [image, setImage] = useState("");

  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setManagerInfo({...managerInfo,avatar:file})
  };

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    CompanyService.findAllCompany(sessionStorage.getItem("token")).then(
      (response) => {
        setCompanies(response.data);
      }
    );
  }, []);

  const [token, setToken] = useState({
    token: sessionStorage.getItem("token"),
  });

  const [company, setCompany] = useState({
    name: "",
  });

  const handleFindAllCompany = async (event) => {
    event.preventDefault();

    CompanyService.findAllCompany(token)
      .then((response) => {
        alert("added successfully *****");
        setCompanies(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message + "patladi token");
      });
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    if (
      image ===
      "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
    ) {
      const newImage = URL.createObjectURL(image);
      console.log(newImage);
      setManagerInfo({
        ...managerInfo,
        avatar: newImage,
      });
    }
    console.log(managerInfo);
    AuthService.registerManager(managerInfo)

      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          width: '400',
          height: '150',
          title: 'Manager Successfully Registered',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function() {
         window.location.replace("http://localhost:3000/companymanagercreatepage")
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          title: 'Invalid Parameter',
          text: 'Please check the values you entered',
          icon:"error",
          width: '400',
          height: '400',

        })
      });
  };

  return (
    <div className="manager-register">
      <div className="left">
      <div className="register-photo-section">
        <div className="register-profile-holder">
          <div className="register-profile-image">
            {image ? (
              <img
                className="manager-register-avatar"
                src={URL.createObjectURL(image)}
              />
            ) : (
              <img
                className="manager-register-avatar"
                src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
                alt="Tanjiro"
              />
            )}
          </div>
        </div>
        <div className="manager-register-buttons">
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
      </div>
      <div className="manager-register-profil-info">
        <form onSubmit={handleCreate}>
          <div className="manager-company-section">
            <div className="inner-company-section">
            <label htmlFor="company-select">Select Company:</label>
            <select
              id="company-select"
              className="select-style"
              onChange={(event) =>
                setManagerInfo({
                  ...managerInfo,
                  company: event.target.value,
                })
              }
            >
              {/* Burada companyMs nin endpoint' inden gelen Companyler listelenecek */}
              <option value="">Please select a company</option>

              {companies.map((company, index) => (
                <option key={index} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
            </div>
          </div>
          <div className="form-data">
            <div className="first-6">
              <div className="data">
                <label>Identify number:</label>
                <input
                  required
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      identityNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Name:</label>
                <input
                  pattern="[a-zA-Z]{1,15}"
                  title="Please enter a valid name"
                  required
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Surname:</label>
                <input
                  pattern="[a-zA-Z]{1,15}"
                  title="Please enter a valid surname"
                  required
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      surname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Mid name:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      middleName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="data">
                <label>Birth-date:</label>
                <input
                  required
                  type="date"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      birthDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Birth-place:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      birthPlace: e.target.value,
                    })
                  }
                />
              </div>

              <div className="data">
                <label>Job-start-date:</label>
                <input
                  type="date"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      jobStart: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Occupation:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      occupation: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Department:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      department: e.target.value,
                    })
                  }
                />
              </div>

              <div className="data">
                <label>E-Mail</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Phone:</label>
                <input
                  pattern="^[0-9]{9,11}$"
                  title="Please enter a valid phone"
                  type="number"
                  required
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="data">
                <label>Address:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setManagerInfo({
                      ...managerInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
      </div>
      <div className="right">

        <img src={ImageManager} alt="" />
      </div>
    </div>
  );
};

export default CompanyManagerCreate;
