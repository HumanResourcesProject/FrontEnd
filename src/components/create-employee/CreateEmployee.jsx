import React from 'react'
import { useState } from 'react';
import './createEmployee.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CompanyManagerService from '../../service/CompanyManagerService';

 const CreateEmployee = () => {
    const [employeeInfo, setEmployeeInfo] = useState({
        identityNumber:"",
        name:"",
        middleName:"",
        surname:"",
        email:"",
        phone:"",
        address:"",
        dateOfBirth:"",
        company:"",
        job:"",
        department:"",
        jobStart:"",
        avatar:"",
        
      })
        const [image,setImage] = useState('');
        
        const onchangeImage = (e) => {
          const file = e.target.files[0];
          setImage(file);
            }
      
      
        const handleCreate = async (event) => {
      
       
          event.preventDefault();
      
          if(image === "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"){
            const newImage = URL.createObjectURL(image)
              setEmployeeInfo({
                ...employeeInfo,
                avatar: newImage
              })
          }
            console.log(adminInfo);
            CompanyManagerService.createEmployee(employeeInfo).then(
              () =>{
                
                alert("added successfully *****")
              })       
              .catch((error) => {
                alert(error.response.data.message);
              });
          
        };
      
      
        return (
          <div className='employee-register'>
          <div className='employee-register-photo-section'>
            <div className='employee-register-profile-holder'>
              <div className='employee-register-profile-image'>
                {image ? <img src={URL.createObjectURL(image)} /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}
              </div>
            </div>
            <div className='employee-register-buttons'>
             <label htmlFor="file" className='choosefilebutton' ><DriveFolderUploadIcon className='uploadicon'/>Choose a File</label>
             <input type="file" id='file' style={{display:'none' }} onChange={onchangeImage}/>
      
            </div>
          </div>
            <div className='employee-register-profil-info'>
              <div className='employee-register-information'>
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
export default CreateEmployee
