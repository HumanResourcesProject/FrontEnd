import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./managerUpdateProfile.scss";
import CompanyManagerService from "../../service/CompanyManagerService";

const ManagerUpdateProfile = () => {
  const [manager, setManager] = useState([]);
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    CompanyManagerService.getManagerInformations(token)
    .then((response) => {
      setManager(response.data);
    });
  }, []);


  const update = () => {
    const gizlenecekDiv = document.getElementById("gizlenecekDiv");
    const gosterilecekDiv = document.getElementById("gosterilecekDiv");
    gizlenecekDiv.style.display = "none";
    gosterilecekDiv.style.display = "block";
  };
  const refresh = () => {
    window.location.reload()
  }
const [selectedFile, setSelectedFile] = useState(null);
const [imageUrl, setImageUrl] = useState(null);
const [loading, setLoading] = useState(false);
const handleImageUpload = (event) => {
  event.preventDefault();
  setLoading(true);
  const formData = new FormData();
  formData.append('file', selectedFile);
  

  CompanyManagerService.getManagerProfilePhoto(formData).then((response) => {
    console.log("Profil fotoğrafı başarıyla yüklendi ve database'e kaydedildi.");
    setTimeout(() => window.location.reload(), 1000);
    setLoading(false);
    setImageUrl(response.data.imageUrl);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });
};
const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: id,
      phone: phone,
      address: address,
    };

    CompanyManagerService.updateManagerInfo(data)
      .then((response) => {
        console.log(response);
        alert("Manager updated successfully!");
        setPhone("");
        setAddress("");
        
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while updating the manager.");
      });
  };

  return (
    <div className='manager-profil'>
    <div className='photoSection'>
      <div className='profileHolder'>
        <h2>Profil Photo</h2>
        <div className='profileImage'>
          {imageUrl  ? <img src={imageUrl} alt="Rengoku" /> : <img src={manager.avatar} alt="Rengoku" />}
        </div>
        <div className="buttons">
          <form onSubmit={handleImageUpload}>
            <input
              type="file"
              onChange={(event) => setSelectedFile(event.target.files[0])}
            />
            <button type="button" onClick={handleImageUpload}>
              Upload
            </button>
            {loading && <span>Yükleniyor...</span>}
        </form>
        </div>
      </div>
      <div className="profilInfo">
        <div className="informationHead">
          <h2>Profil Information</h2>
        </div>
        <div id="gizlenecekDiv" className="information">
          <form action="">
            <div className="input-profile">
              <label>Name:</label>
              <p>{manager.name}</p>
            </div>
            <div className="input-profile">
              <label>Mid Name:</label>
              <p>{manager.middleName}</p>
            </div>
            <div className="input-profile">
              <label>Surname:</label>
              <p>{manager.surname}</p>
            </div>

            <div className="input-profile">
              <label>E-mail:</label>
              <p>{manager.email}</p>
            </div>

            <div className="input-profile">
              <label>Phone number:</label>
              <p>{manager.phone}</p>
            </div>
            <div className="input-profile">
              <label>Address:</label>
              <p>{manager.address}</p>
            </div>
            <div className="input-profile">
              <label>Company:</label>
              <p>{manager.company}</p>
            </div>

            <div className="input-profile">
              <label>Occupation:</label>
              <p>{manager.job}</p>
            </div>
            <div className="input-profile">
              <label>Department:</label>
              <p>{manager.departmen}</p>
            </div>
            <div className="input-profile">
              <label>Job Start:</label>
              <p>{manager.jobStart}</p>
            </div>
            <div className="input-profile">
              <label>Job End:</label>
              <p>{manager.jobEnd}</p>
            </div>
            <div className="update-button">
              <button type="button" onClick={update}>
                Update
              </button>
            </div>
          </form>
        </div>
        <div id="gosterilecekDiv" className="informationsecret">
          <form onSubmit={handleSubmit}>
            <div className="input-profile">
              <label>
                Id:
              </label>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              
            </div>
            <div className="input-profile">
              <label>
                Phone:
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              
            </div>
            <div className="input-profile">
              <label>
                Address:
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
             
            </div>
            <div className="update-button">
              <button type="submit">Update Admin</button>
              <button type="button" onClick={refresh}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ManagerUpdateProfile
