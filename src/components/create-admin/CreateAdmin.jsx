import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './createAdmin.scss'

const ProfilPage = () => {

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

  const handleCreate = () => {
  
    window.location.reload();
  };

  return (
    <div className='register'>
    <div className='register-photo-section'>
      <div className='register-profile-holder'>
        <h2>Profil Photo</h2>
        <div className='register-profile-image'>
          {imageUrl ? <img src={imageUrl} alt="Rengoku" /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}
        </div>
      </div>
      <div className='register-buttons'>
        <form>
        <input type="text" placeholder="User ID" value={userId} onChange={(event) => setUserId(event.target.value)} />
          <input type="file" name="image" onChange={handleImageUpload} />
          <span id="file-selected"></span>
        </form>
        <button onClick={handleCreate}>Update</button>
      </div>
    </div>
      <div className='register-profil-info'>
        <div className='register-information-head'>
        </div>
        <div className='register-information'>
          <form action="">
            <label for="ad">Name:</label>
            <input type="text" />
            <label for="soyad">Surname:</label>
            <input type="text" />
            <label for="email">E-mail:</label>
            <input type="text" />
            <label for="phone">Phone Number:</label>
            <input type="text" />
            <label for="phone">Address:</label>
            <input type="text" />
            <label for="sifre">Password:</label>
            <input type="password" id="sifre" name="sifre" value="sifre123"></input>
            <button type="button">Create</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default ProfilPage
