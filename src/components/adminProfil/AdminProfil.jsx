import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './adminProfil.scss'

const ProfilPage = () => {
  const update = () => {
    const gizlenecekDiv = document.getElementById('gizlenecekDiv')
    const gosterilecekDiv = document.getElementById('gosterilecekDiv')
    gizlenecekDiv.style.display = 'none'
    gosterilecekDiv.style.display = 'block'
  }
  const refresh = () => {
    window.location.reload()
  }
  const [imageUrl, setImageUrl] = useState('');
  const [userId, setUserId] = useState('');

  const handleImageUpload = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('id', userId);

    axios.post('http://localhost:7070/admin/imagescloud', formData)
      .then(response => setImageUrl(response.data.imageUrl))
      .catch(error => console.log(error));
  };

  const handleUpdate = () => {
    window.location.reload();
  };

  return (
    <div className='profil'>
    <div className='photoSection'>
      <div className='profileHolder'>
        <h2>Profil Photo</h2>
        <div className='profileImage'>
          {imageUrl ? <img src={imageUrl} alt="Rengoku" /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}
        </div>
      </div>
      <div className='buttons'>
        <form>
        <input type="text" placeholder="User ID" value={userId} onChange={(event) => setUserId(event.target.value)} />
          <input type="file" name="image" onChange={handleImageUpload} />
          <span id="file-selected"></span>
        </form>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
      <div className='profilInfo'>
        <div className='informationHead'>
          <h2>Profil Information</h2>
        </div>
        <div id="gizlenecekDiv" className='information'>
          <form action="">
            <label for="ad">Name:</label>
            <p>John</p><br />
            <label for="soyad">Surname:</label>
            <p>Doe</p><br />
            <label for="email">E-mail:</label>
            <p>johndoe@example.com </p><br />
            <label for="phone">Phone number:</label>
            <p>+905413529614 </p><br />
            <label for="phone">Address:</label>
            <p>Etimesgut/Ankara</p><br />
            <label for="email">E-posta:</label>
            <p>johndoe@example.com </p><br />
            <label for="sifre">Şifre:</label>
            <input type="password" id="sifre" name="sifre" value="sifre123"></input><br />
            <button type="button" onClick={update}>Update</button>
          </form>
        </div>
        <div id="gosterilecekDiv" className='information'>
          <form action="">

            <label for="phone">Phone number:</label>
            <input type="tel" id="phone" name="phone" placeholder='Enter Phone number' /><br /><br />
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" placeholder='Enter Address' /><br /><br />

            <button type="button" onClick={refresh}>Update Informations</button>
            <button type='button' onClick={refresh}>Cancel</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default ProfilPage
