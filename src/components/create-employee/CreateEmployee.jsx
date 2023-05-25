import React from "react";
import { useState, useEffect } from "react";
import "./createEmployee.scss";
import ManagerService from "../../service/CompanyManagerService";
import AuthService from "../../service/AuthService";
import EmailInput from "../email-input/EmailInput";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

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
  });

  const [data] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });

  const [image, setImage] = useState(null);

  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    ManagerService.postShortDetails(data).then((response) => {
      setEmployeeInfo({ ...employeeInfo, company: response.data.company });
    });
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
        alert("unexpected error");
      });
  };

  return (
    <div className="employee-register">
      <div className="employee-register-part">
        <div className="employee-register-text">Employee Register</div>
      </div>
      {/* <div className="employee-register-photo-section">
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
          Choose a File
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={onchangeImage}
        />
      </div> */}
      <div className="employee-register-profil-info">
        <form onSubmit={handleCreate}>
          <div className="input-area">
            <div className="first-6">
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
                  pattern="[a-zA-Z]{1,15}"
                  title="Please enter a valid surname"
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
              <div className="input-data">
                <label>Job-start-date:</label>
                <input
                  pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(\d{4})$"
                  title="Please enter a valid day"
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
                <label>E-Mail</label>
                <EmailInput
                  className="email-input"
                  onEmailChange={(email) =>
                    setEmployeeInfo({ ...employeeInfo, email })
                  }
                />
              </div>
              <div className="input-data">
                <label>Phone:</label>
                <input
                  pattern="^[0-9]{9,11}$"
                  title="Please enter a valid phone"
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
            </div>
          </div>

          <div className="employee-register-button-part">
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEmployee;
