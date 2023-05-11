import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./companyManagerCreate.scss";
import CompanyManagerService from "../../service/CompanyManagerService";

const CompanyManagerCreate = () => {
 
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

  // For Image ********
  const [image,setImage] = useState('');
  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
      }
  //********* */
  //  burada CompanyMS' deki endpoint' e istek atılacak.
  // // Section where the CompanyList come :) ********
  // const [companies, setCompanies] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:7071/company/getAllCompany").then((response) => {
  //     setCompanies(response.data);
  //   });
  // }, []);
  // //*************** */
 
  const handleCreate = async (event) => {

 
    event.preventDefault();

    if(image === "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"){
      const newImage = URL.createObjectURL(image)
        setManagerInfo({
          ...managerInfo,
          avatar: newImage
        })
    }

      CompanyManagerService.createCompanyManager(managerInfo).then(
        () =>{
          
          alert("added successfully *****")
        })       
        .catch((error) => {
          alert(error.response.data.message+"isterler: password 3'den asaği olmucak ... mail: gmail.com ile bitecek.... telefon sadece numara olmalı... hicbir alan bos gecilemez");
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
            <form onSubmit={handleCreate}>
            <div className="manager-company-section">
              <label for="company-select">Select Company:</label>
              <select id="company-select"
              onChange={(event) => 
                setManagerInfo({...managerInfo, 
                  companyName: event.target.value})}
              >
                {/* Burada companyMs nin endpoint' inden gelen Companyler listelenecek */}
                <option value="">Please select a company</option>
                {/* {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))} */}
              </select>
            </div>
            <br />
            <div className='manager-name-section'>
            <label for="id-number">Identify number:</label>
              <input
               type="text" onChange={(e) =>
                setManagerInfo({
                  ...managerInfo,
                  identifynumber: e.target.value,
                })
              } 
               />
               <br />
              <label for="first-name">Name:</label>
              <input
               type="text" onChange={(e) =>
                setManagerInfo({
                  ...managerInfo,
                  name: e.target.value,
                })
              }
               />
              <label for="last-name">Surname:</label>
              <input 
               type="text" onChange={(e) =>
                setManagerInfo({
                  ...managerInfo,
                  surname: e.target.value,
                })
              }
              />
            </div>
            <br />
            <div className="manager-birth-section">
              <label for="birth-date">Birth-date:</label>
              <input
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    birthdate: e.target.value,
                  })
                }
               /> <br />
              <label for="birth-place">Birth-place:</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    birthplace: e.target.value,
                  })
                }
              />
            </div>
            <br />
            <div className="manager-job-section">
              <label for="job-start-date">Job-start-date:</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    hiredate: e.target.value,
                  })
                }
              /><br />
              <label for="job-title">Occupation:</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    jobtitle: e.target.value,
                  })
                }
              /><br />
              <label for="department">Department:</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    birthdate: e.target.value,
                  })
                }
              />
            </div>
            <br />
            <div className="manager-com-section">
              <label for="email">E-Mail</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    email: e.target.value,
                  })
                }
              />
              <label for="phone">Phone:</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    phone: e.target.value,
                  })
                }
              />
              <br />
              <label for="address">Address:</label>
              <input 
                type="text" onChange={(e) =>
                  setManagerInfo({
                    ...managerInfo,
                    address: e.target.value,
                  })
                }
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