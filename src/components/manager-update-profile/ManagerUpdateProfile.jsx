import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./managerUpdateProfile.scss";
import AdminService from "../../service/AdminService";

const ProfilPage = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7070/admin/getadmin?id=1").then((response) => {
      setAdmin(response.data);
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
// Burası pp update http://localhost:7070/admin/imagescloud?id=1
const [selectedFile, setSelectedFile] = useState(null);
const [imageUrl, setImageUrl] = useState(null);
const [loading, setLoading] = useState(false);
const handleImageUpload = (event) => {
  event.preventDefault();
  setLoading(true);
  const formData = new FormData();
  formData.append('file', selectedFile);
  

  AdminService.getFirstAdminInfo(formData).then((response) => {
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
// Burası pd update http://localhost:7070/admin/updateadmin'
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

    axios
      .post("http://localhost:7070/admin/updateadmin", data,
      {
        headers: {
          'Content-Type': 'application/json'
      }
      }
      )
      
      .then((response) => {
        console.log(response);
        alert("Admin updated successfully!");
        setId("");
        setPhone("");
        setAddress("");
        
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while updating the admin.");
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
export default ProfilPage
