import React from "react";
import { useState, useEffect } from "react";
import "./managerUpdateProfile.scss";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CompanyManagerService from "../../service/CompanyManagerService";

const ManagerUpdateProfile = () => {
  const [manager, setManager] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token"),
  });
  useEffect(() => {
    CompanyManagerService.getManagerInformations(token)
    .then((response) => {
      setManager(response.data);
    });
  }, []);


  const [managerInfo, setManagerInfo] = useState({
    phone:"",
    address:"",
  })
    const [image,setImage] = useState('');
    
    const onchangeImage = (e) => {
      const file = e.target.files[0];
      setImage(file);
        }
  
  
    const handleCreate = async (event) => {
      event.preventDefault();
      if(image !== manager.avatar){
        const newImage = URL.createObjectURL(image)
          setManagerInfo({
            ...managerInfo,
            avatar: newImage
          })
      }
        console.log(managerInfo);
        CompanyManagerService.updateManagerInfo(managerInfo).then(
          () =>{
            
            alert("added successfully *****")
          })       
          .catch((error) => {
            alert("unexpected error");
          });
      
    };
  

  return (
    <div className='manager-profil'>
    <div className='photoSection'>
      <div className='profileHolder'>
        <h2>Profil Photo</h2>
        <div className='register-profile-image'>
          {image ? <img src={URL.createObjectURL(image)} /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Rengoku" />}
        </div>
      </div>
      <div className='register-buttons'>
       <label htmlFor="file" className='choosefilebutton' ><DriveFolderUploadIcon className='uploadicon'/>Choose a File</label>
       <input type="file" id='file' style={{display:'none' }} onChange={onchangeImage}/>
      </div>
      <div className="profilInfo">
        <div className="informationHead">
          <h2>Update Profile</h2>
        </div>
        <form onSubmit={handleCreate}>
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
              <input type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    address: e.target.value,
                  })
                }/>            </div>
            <div className="input-profile">
              <label>Company:</label>
              <input type="tel" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    phone: e.target.value,
                  })
                }/>
            </div>

            <div className="input-profile">
              <label>Occupation:</label>
              <p>{manager.occupation}</p>
            </div>
            <div className="input-profile">
              <label>Department:</label>
              <p>{manager.department}</p>
            </div>
            <div className="input-profile">
              <label>Job Start:</label>
              <p>{manager.jobStart}</p>
            </div>
   
            <div className="update-button">
            <button type="submit" onClick={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    avatar: image
                  })
                }>Update</button>
            </div>
          </form>

      </div>
    </div>
    </div>
  );
};
export default ManagerUpdateProfile
