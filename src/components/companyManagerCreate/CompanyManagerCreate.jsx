import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./companyManagerCreate.scss";

const CompanyManagerCreate = () => {

  const [image,setImage] = useState('');
  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const [companies, setCompanies] = useState([]);
  const [managerInfo, setManagerInfo] = useState({
    identifynumber:"",
    avatar:"",
    companyName:"",
    name:"",
    surname:"",
    birthdate:"",
    birthplace:"",
    hiredate:"",
    jobtitle:"",
    department:"",
    email:"",
    phone:"",
    address:"",
  })
  // bir seyler yazdım buraya
  useEffect(() => {
    axios.get("https://example.com/api/findallcompanies").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    const { fieldName, fieldValue } = event.target;
    setManagerInfo({
      ...managerInfo,
      [fieldName]: fieldValue,
    });
  };

  return (
    <div className='manager-register'>
      <div className='register-photo-section'>
        <div className='register-profile-holder'>
          <div className='register-profile-image'>
            {image ? <img src={URL.createObjectURL(image)} /> : <img src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png" alt="Tanjiro" />}
          </div>
        </div>
        <div className='register-buttons'>
        <label htmlFor="file" className='choosefilebutton' ><DriveFolderUploadIcon className='uploadicon'/>Choose a Image</label>
        <input type="file" id='file' style={{display:'none' }}
        onChange={onchangeImage}/>
        </div>
      </div>
      <div className='manager-register-profil-info'>
        <div className='manager-register-information'>
          <h2>Bilgi Alma Bölümü</h2>
            <form onSubmit={handleInputChange}>
            <div className="manager-company-section">
              <label for="company-select">Select Company:</label>
              <select id="company-select">
                <option value="">Please select a company</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className='manager-name-section'>
            <label for="id-number">Identify number:</label>
              <input
               type="text"
               id="id-number"
               name="id-number"
               value={managerInfo.identifynumber}
               />
               <br />
              <label for="first-name">Name:</label>
              <input
               type="text" 
               id="first-name" 
               name="first-name"
               value={managerInfo.name}
               />
              <label for="last-name">Surname:</label>
              <input 
              type="text" 
              id="last-name" 
              name="last-name"
              value={managerInfo.surname}
              />
            </div>
            <br />
            <div className="manager-birth-section">
              <label for="birth-date">Birth-date:</label>
              <input
               type="date" 
               id="birth-date" 
               name="birth-date"
               value={managerInfo.birthdate}
               /> <br />
              <label for="birth-place">Birth-place:</label>
              <input type="text" 
              id="birth-place" 
              name="birth-place"
              value={managerInfo.birthplace}
              />
            </div>
            <br />
            <div className="manager-job-section">
              <label for="job-start-date">Job-start-date:</label>
              <input type="date" 
              id="job-start-date" 
              name="job-start-date"
              value={managerInfo.hiredate}
              /><br />
              <label for="job-title">Occupation:</label>
              <input type="text" 
              id="job-title" 
              name="job-title"
              value={managerInfo.jobtitle}
              /><br />
              <label for="department">Department:</label>
              <input type="text" 
              id="department" 
              name="department"
              value={managerInfo.department}
              />
            </div>
            <br />
            <div className="manager-com-section">
              <label for="email">E-Mail</label>
              <input type="email" 
              id="email" 
              name="email"
              value={managerInfo.email}
              />
              <label for="phone">Phone:</label>
              <input type="tel" 
              id="phone" 
              name="phone"
              value={managerInfo.phone}
              />
              <br />
              <label for="address">Address:</label>
              <input type="text" 
              id="address" 
              name="address"
              value={managerInfo.address}
              />
            </div>
            <button type="submit" class="save-button">Save</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default CompanyManagerCreate