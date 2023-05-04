import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './createAdmin.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AdminService from '../../service/AdminService';
import { colors } from '@mui/material';
import avatar from '../../images/avatar.png'
const ProfilPage = () => {

  const [imageUrl, setImageUrl] = useState('');
  const [userId, setUserId] = useState('');

const [adminInfo, setAdminInfo] = useState({
  name:"",
  surname:"",
  email:"",
  password:"",
  phone:"",
  address:"",
  avatar:"",
})
  const [image,setImage] = useState('');
  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
      }

  const handleImageUpload = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('id', userId);

    axios.post('http://localhost:7070/admin/imagescloud', formData)
      .then(response => setImageUrl(response.data.imageUrl))
      .catch(error => console.log(error));
  };

  const handleCreate = async (event) => {

 
    event.preventDefault();
   

      AdminService.postCreateAdmin(adminInfo).then(
        () =>{
          
          alert("added successfully *****")
        })       
        .catch((error) => {
          alert(error.response.data.message+"isterler: password 3'den asaği olmucak ... mail: gmail.com ile bitecek.... telefon sadece numara olmalı... hicbir alan bos gecilemez");
        });
    
  };

  return (
    <div className='register'>
    <div className='register-photo-section'>
      <div className='register-profile-holder'>
        <div className='register-profile-image'>
          {image ? <img src={URL.createObjectURL(image)} /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}
        </div>
      </div>
      <div className='register-buttons'>
       <label htmlFor="file" className='choosefilebutton' ><DriveFolderUploadIcon className='uploadicon'/>Choose a File</label>
       <input type="file" id='file' style={{display:'none' }} onChange={onchangeImage}/>

      </div>
    </div>
      <div className='register-profil-info'>
        <div className='register-information'>
          <form onSubmit={handleCreate}>
            <label htmlFor="ad">Name:</label>
            <input type="text" onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    name: e.target.value,
                  })
                } />
            <label htmlFor="soyad">Surname:</label>
            <input type="text" onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    surname: e.target.value,
                  })
                }/>
            <label htmlFor="email">E-mail:</label>
            <input type="text" onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    email: e.target.value,
                  })
                }/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    phone: e.target.value,
                  })
                }/>
            <label htmlFor="address">Address:</label>
            <input type="text" onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    address: e.target.value,
                  })
                }/>
            <label htmlFor="sifre">Password:</label>
            <input type="password" id="sifre" name="sifre"
            onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    password: e.target.value,
                  })
                }></input>
            <button type="submit" onClick={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    avatar: image
                  })
                }>Create</button>
          </form>
        </div>
      </div>
    </div>

  )
}
export default ProfilPage
