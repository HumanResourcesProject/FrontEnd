import React from "react";
import { useState, useEffect } from "react";
import "./createEmployee.scss";
import ManagerService from "../../service/CompanyManagerService";
import AuthService from "../../service/AuthService";
import EmailInput from "../email-input/EmailInput";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import ImageEmp from "../../assets/images/employee-register.svg"
import Swal from 'sweetalert2';


const CreateEmployee = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    token: sessionStorage.getItem("token"),
    identityNumber: "",
    name: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    birthPlace: "",
    company: "",
    occupation: "",
    department: "",
    jobStart: "",
    avatar: "",
    salary: "",
  });

  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });

  const [image, setImage] = useState(null);

  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setEmployeeInfo({ ...employeeInfo, avatar: file });
  };

  useEffect(() => {
    ManagerService.postShortDetails(data).then((response) => {
      setEmployeeInfo({ ...employeeInfo, company: response.data.company });
    });
  }, []);

  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(employeeInfo);
    if (
      image ===
      "https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
    ) {
      const newImage = URL.createObjectURL(image);
      setEmployeeInfo({
        ...employeeInfo,
        avatar: newImage,
      });
    }
    console.log(employeeInfo);
    AuthService.registerEmployee(employeeInfo)
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          width: '400',
          height: '150',
          title: 'Successful entry',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function() {
          window.location.replace("http://localhost:3000/employeeregister");
        }, 1500);      })
      .catch((error) => {
        Swal.fire({
          title: 'Invalid parameter',
          text: 'Please check the values you entered',
          icon: 'error',
          width: '400',
          height: '400',
          imageUrl: 'https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?w=826&t=st=1684682338~exp=1684682938~hmac=4875a35809cd122ac30985a1b47f1aa39d99d714605152608b2465f0300c1c27',
          imageWidth:200,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })      });
  };

  return (
    <div className="employee-register">
      <div className="left-part">
        <div className="register-photo-section">
          <div className="employee-register-image">
            {image ? (
              <img
                className="employee-register-avatar"
                src={URL.createObjectURL(image)}
              />
            ) : (
              <img
                className="employee-register-avatar"
                src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
                alt="Rengoku"
              />
            )}
          </div>
          <div className="employee-register-buttons">
            <label htmlFor="file" className="choosefilebutton">
              <DriveFolderUploadIcon className="uploadicon" />
              Choose Avatar
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={onchangeImage}
            />
          </div>
        </div>
        <div className="employee-register-profil-info">
          <form onSubmit={handleCreate}>
            
             
                <div className="input-data">
                  <label>Identify number:</label>
                  <input
                    pattern="^(?=.*[0-9])[0-9]{11}$"
                    title="Please enter a valid identify number"
                    className="inputs"
                    type="number"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        identityNumber: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="input-data">
                  <label>Name:</label>
                  <input
                    pattern="[a-zA-Z]{1,15}"
                    title="Please enter a valid name"
                    className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="input-data">
                  <label>Surname:</label>
                  <input
                    // pattern="[a-zA-Z]{1,15}"
                    // title="Please enter a valid surname"
                    className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        surname: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="input-data">
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

                <div className="input-data">
                  <label>Date of Birth:</label>
                  <input
                    pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(\d{4})$"
                    title="Please enter a valid birthday"
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
                    required
                  />
                </div>
                <div className="input-data">
                  <label>Birth Place:</label>
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
                <div className="input-data">
                  <label>Job Start Date:</label>
                  <input
                    // pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(\d{4})$"
                    // title="Please enter a valid day"
                    className="inputs"
                    type="date"
                    min={new Date().toISOString().substring(0, 10)}
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        jobStart: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="input-data">
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
                <div className="input-data">
                  <label>Salary:</label>
                  <input
                    className="inputs"
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        salary: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-data">
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

                <div className="input-data">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="text"
                    required
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-data">
                  <label>Phone:</label>
                  <input
                    // pattern="^[0-9]{9,11}$"
                    // title="Please enter a valid phone"
                    type="number"
                    required
                    className="inputs"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-data">
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
              
            

           
              <button type="submit" className="save-button">
                Save
              </button>
            
          </form>
        </div>
      </div>
      <div className="right-part">
        <img className="manager-register-image" src={ImageEmp} alt="" />
      </div>
    </div>
  );
};
export default CreateEmployee;
