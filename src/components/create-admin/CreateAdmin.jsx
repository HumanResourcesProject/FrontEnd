import React from 'react'
import { useState } from 'react';
import './createAdmin.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AuthService from '../../service/AuthService';
import { red } from '@mui/material/colors';
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
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    setErrors({ ...errors, name: "" });

    if (adminInfo.name.trim() === "") {
      setErrors({ ...errors, name: "Name is required." });
      return ;
    }
  

    if (adminInfo.surname.trim() === "") {
      setErrors({ ...errors, surname: "Surname is required." });
      return;
    }

    if (adminInfo.email.trim() === "") {
      setErrors({ ...errors, email: "Email is required." });
      return;
    }

    // Reset the error messages
    setErrors({ name: "", surname: "", email: "" });

    if (image === "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png") {
      const newImage = URL.createObjectURL(image);
      setAdminInfo({
        ...adminInfo,
        avatar: newImage,
      });
    }

    console.log(adminInfo);
    AuthService.registerAdmin(adminInfo)
      .then(() => {
        alert("Added successfully *****");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
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

            {errors.name && <p className="error-text" style={{color: "red"}}> {errors.name} </p>}

            <label htmlFor="soyad">Surname:</label>
            <input type="text" onChange={(e) =>
              setAdminInfo({
                ...adminInfo,
                surname: e.target.value,
              })
            } />
                                      {errors.surname && <p className="error-text">{errors.surname}</p>}

            <label htmlFor="email">E-mail:</label>
            <input type="text" onChange={(e) =>
                  setAdminInfo({
                    ...adminInfo,
                    email: e.target.value,
                  })
                }/>
                          {errors.email && <p className="error-text">{errors.email}</p>}

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" onChange={(e) =>
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
export default CreateAdmin;
