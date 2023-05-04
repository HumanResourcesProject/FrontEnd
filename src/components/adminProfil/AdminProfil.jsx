import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './adminProfil.scss'

const ProfilPage = () => {
  const [admin, setAdmin] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:7070/admin/getadmin?id=1').then((response) => {
      setAdmin(response.data);
    });
  }, []);

  const update = () => {
    const gizlenecekDiv = document.getElementById('gizlenecekDiv')
    const gosterilecekDiv = document.getElementById('gosterilecekDiv')
    gizlenecekDiv.style.display = 'none'
    gosterilecekDiv.style.display = 'block'
  }
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
  
  axios.post('http://localhost:7070/admin/imagescloud?id=1', formData)
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
// Burası pd update http://localhost:7070/admin/updateadmin'
const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  const data = { id: id, phone: phone, address: address };

  axios.put('http://localhost:7070/admin/updateadmin', data)
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
      </div>
      <div className='buttons'>
        <form onSubmit={handleImageUpload}>
          <input type="file" onChange={event => setSelectedFile(event.target.files[0])} />
          <button type="button" onClick={handleImageUpload}>Upload</button>
          {loading && <span>Yükleniyor...</span>}
        </form>
      </div>
    </div>
      <div className='profilInfo'>
        <div className='informationHead'>
          <h2>Profil Information</h2>
        </div>
        <div id="gizlenecekDiv" className='information'>
        <form action="">
          <label htmlFor="name">Name:</label>
          <p>{admin.name}</p>
          <br />
          <label htmlFor="surname">Surname:</label>
          <p>{admin.surname}</p>
          <br />
          <label htmlFor="email">E-mail:</label>
          <p>{admin.email}</p>
          <br />
          <label htmlFor="phone">Phone number:</label>
          <p>{admin.phone}</p>
          <br />
          <label htmlFor="address">Address:</label>
          <p>{admin.address}</p>
          <br />
          <button type="button" onClick={update}>Update</button>
        </form>
        </div>
        <div id="gosterilecekDiv" className='information'>
        <form onSubmit={handleSubmit}>
      <label>
        Id:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <button type="submit">Update Admin</button>
      <button type='button' onClick={refresh}>Cancel</button>
    </form>
        </div>
      </div>
    </div>

  )
}
export default ProfilPage
