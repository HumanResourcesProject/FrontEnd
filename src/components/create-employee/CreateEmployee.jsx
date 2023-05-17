import React from "react";
import { useState, useEffect } from "react";
import "./createEmployee.scss";
import CompanyService from "../../service/CompanyService";
import AuthService from '../../service/AuthService';
import EmailInput from "../email-input/EmailInput";

const CreateEmployee = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    identityNumber: "",
    name: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    birthPlace:"",
    company: "",
    occupation: "",
    department: "",
    jobStart: "",
    //avatar: "",
  });
  const [image, setImage] = useState("");

  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    CompanyService.findAllCompany(sessionStorage.getItem("token")).then(
      (response) => {
        setCompanies(response.data);
        console.log(response);
      }
    );
  }, []);
  

  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(employeeInfo);
    // if (
    //   image ===
    //   "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
    // ) {
    //   const newImage = URL.createObjectURL(image);
    //   setEmployeeInfo({
    //     ...employeeInfo,
    //     avatar: newImage,
    //   });
    // }
    // console.log(employeeInfo);
    // CompanyManagerService.createEmployee(employeeInfo)
    //   .then(() => {
    //     alert("added successfully *****");
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.message);
    //   });
    AuthService.registerEmployee(employeeInfo)
      .then(() => {
        alert("added successfully *****");
      })
      .catch((error) => {
        alert(
          "unexpected error"
        );
      });
  };

  return (
    <div className="employee-register">
      <div className="employee-register-photo-section">
        <div className="employee-register-profile-holder">
          {/* <div className="employee-register-profile-image">
            {image ? (
              <img src={URL.createObjectURL(image)} />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
                alt="Rengoku"
              />
            )}
          </div> */}
        </div>
        {/* <div className="employee-register-buttons">
          <label htmlFor="file" className="choosefilebutton">
            <DriveFolderUploadIcon className="uploadicon" />
            Choose a File
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={onchangeImage}
          />
        </div> */}
      </div>
      <div className="employee-register-profil-info">
        <div className="employee-register-information">
          <h2>Employee Registration</h2>
        
          <form onSubmit={handleCreate}>
            <div className="employee-company-section">
              <label htmlFor="employee-select">Select Company:</label>
              <select
                id="company-select"
                className="select-style"
                defaultValue=""
                onChange={(event) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    company: event.target.value,
                  })
                }
              >
                {/* Burada companyMs nin endpoint' inden gelen Companyler listelenecek */}
                <option value="" disabled >Please select a company</option>

                {companies.map((company,index) => (
                  <option key={index} value={company.name}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-data">
              <div className="first-6">
                <div className="data">
                  <label>Identify number:</label>
                  <input
                    className="inputs"
                    type="number"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        identityNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Name:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Surname:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        surname: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Mid Name:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        middleName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="data">
                  <label>Date of Birth:</label>
                  <input
                  className="inputs"
                    type="date"
                    min="1900-01-01"
                    max="2005-01-01"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        birthDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Birth-place:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        birthPlace: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="second-6">
                <div className="data">
                  <label>Job-start-date:</label>
                  <input
                  className="inputs"
                    type="date"
                    min="1900-01-01"
                    max="2005-01-01"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        jobStart: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Occupation:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        occupation: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Department:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        department: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="data">
                  <label>E-Mail</label>
                 <EmailInput onEmailChange={(email)=>
                setEmployeeInfo({...employeeInfo,email})}/>
                </div>
                <div className="data">
                  <label>Phone:</label>
                  <input
                    type="number"
                    className="inputs"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Address:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateEmployee;