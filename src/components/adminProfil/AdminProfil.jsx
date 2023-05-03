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
const handleImageUpload = (event) => {
  const formData = new FormData();
  formData.append('file', selectedFile);
  
  axios.post('http://localhost:7070/admin/imagescloud?id=1', formData)
  .then(() => {
    console.log("Profil fotoğrafı başarıyla yüklendi ve database'e kaydedildi.");
  })
  .catch((error) => {
    console.log(error);
  });
};
// Burası pd update http://localhost:7070/admin/updateadmin?id=1'
const [adminInfo, setAdminInfo] = useState({ 
  id: "",
  phone: "",
  address: "",
});

const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('http://localhost:7070/admin/updateadmin', adminInfo,{headers:{
    "Content-Type": 'application/json'
  }

  })
    .then((response) => {
      console.log('Başarılı:', response);
    })
    .catch((error) => {
      // alert(adminInfo);
      console.log(adminInfo);
      console.log('Hata:', error);
    });
};

  return (
    <div className='profil'>
    <div className='photoSection'>
      <div className='profileHolder'>
        <h2>Profil Photo</h2>
        <div className='profileImage'>
          {admin.avatar ? <img src={admin.avatar} alt="Rengoku" /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}
        </div>
      </div>
      <div className='buttons'>
        <form onSubmit={handleImageUpload}>
          <input type="file" onChange={event => setSelectedFile(event.target.files[0])} />
          <button type="button" onClick={handleImageUpload}>Upload</button>
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
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" name="id" placeholder='Enter id' onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    id: e.target.value,
                  })
                } /><br /><br />
        <label htmlFor="phone">Phone number:</label>
        <input type="text" id="phone" name="phone" placeholder='Enter Phone number' onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    phone: e.target.value,
                  })
                } /><br /><br />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={adminInfo.address} placeholder='Enter Address' onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    address: e.target.value,
                  })
                } /><br /><br />
        <button type="submit">Update Information</button>
        <button type='button' onClick={refresh}>Cancel</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default ProfilPage
