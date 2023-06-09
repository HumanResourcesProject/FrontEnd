import React from "react";
import { useState, useEffect } from "react";
//import PhoneInput from 'react-phone-number-input'
import "./style.css";
import "./adminProfil.scss";
import AdminService from '../../service/AdminService';


const ProfilPage = () => {
  const [admin, setAdmin] = useState([]);
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    AdminService.getAdminInformations(token)
    .then((response) => {
      setAdmin(response.data);
    }).catch((error)=>{
      console.log(error);
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
  
  AdminService.getAdminProfilePhoto(formData)
  .then((response) => {
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
      token : sessionStorage.getItem("token"),
    };

    AdminService.updateAdminInfo(data)
      .then((response) => {
        console.log(response);
        alert("Admin updated successfully!");
        setId(""); // Kaldırılacak
        setPhone("");
        setAddress("");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <div className='profil'>
    <div className='photoSection'>
      <div className='profileHolder'>
        <h2>Profil Photo</h2>
        <div className='profileImage'>
          {imageUrl  ? <img src={imageUrl} alt="Rengoku" /> : <img src={admin.avatar} alt="Rengoku" />}
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
              <label htmlFor="name">Name:</label>
              <p>{admin.name}</p>
            </div>

            <div className="input-profile">
              <label htmlFor="surname">Surname:</label>
              <p>{admin.surname}</p>
            </div>

            <div className="input-profile">
              <label htmlFor="email">E-mail:</label>
              <p>{admin.email}</p>
            </div>

            <div className="input-profile">
              <label htmlFor="phone">Phone number:</label>
              <p>{admin.phone}</p>
            </div>
            <div className="input-profile">
              <label htmlFor="address">Address:</label>
              <p>{admin.address}</p>
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
                Phone:
                </label>
                {/* { <PhoneInput
                  international
                  defaultCountry="TR"
                  value={phone}
                  onChange={setPhone}
                /> } */}
                <input
                  type="tel"
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
export default ProfilPage
