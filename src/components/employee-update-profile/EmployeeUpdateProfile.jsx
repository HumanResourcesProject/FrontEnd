import React from "react";
import { useState, useEffect } from "react";
import "./employeeUpdateProfile.scss";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import EmployeeService from "../../service/EmployeeService";

const EmployeeUpdateProfile = () => {
  const [employee, setEmployee] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token"),
  });
  useEffect(() => {
    EmployeeService.getEmployeeInformations(token)
    .then((response) => {
      setEmployee(response.data);
    });
  }, []);


  const [employeeInfo, setEmployeeInfo] = useState({
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
      if(image !== employee.avatar){
        const newImage = URL.createObjectURL(image)
          setEmployeeInfo({
            ...employeeInfo,
            avatar: newImage
          })
      }
        console.log(employeeInfo);
        EmployeeService.updateEmployeeInformations(employeeInfo).then(
          () =>{
            
            alert("added successfully *****")
          })       
          .catch((error) => {
            alert("unexpected error");
          });
      
    };
  

  return (
    <div className='employee-profil'>
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
              <p>{employee.name}</p>
            </div>
            <div className="input-profile">
              <label>Mid Name:</label>
              <p>{employee.middleName}</p>
            </div>
            <div className="input-profile">
              <label>Surname:</label>
              <p>{employee.surname}</p>
            </div>

            <div className="input-profile">
              <label>E-mail:</label>
              <p>{employee.email}</p>
            </div>

            <div className="input-profile">
              <label>Phone number:</label>
              <p>{employee.phone}</p>
            </div>
            <div className="input-profile">
              <label>Address:</label>
              <input type="text" onChange={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    address: e.target.value,
                  })
                }/>            </div>
            <div className="input-profile">
              <label>Company:</label>
              <input type="tel" onChange={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    phone: e.target.value,
                  })
                }/>
            </div>

            <div className="input-profile">
              <label>Occupation:</label>
              <p>{employee.occupation}</p>
            </div>
            <div className="input-profile">
              <label>Department:</label>
              <p>{employee.department}</p>
            </div>
            <div className="input-profile">
              <label>Job Start:</label>
              <p>{employee.jobStart}</p>
            </div>
   
            <div className="update-button">
            <button type="submit" onClick={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
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
export default EmployeeUpdateProfile
