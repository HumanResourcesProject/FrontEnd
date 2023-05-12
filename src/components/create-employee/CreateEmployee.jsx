import React from "react";
import { useState, useEffect } from "react";
import "./createEmployee.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CompanyManagerService from "../../service/CompanyManagerService";
import CompanyService from "../../service/CompanyService";

const CreateEmployee = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    identityNumber: "",
    name: "",
    middleName: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    company: "",
    job: "",
    department: "",
    jobStart: "",
    avatar: "",
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
      }
    );
  }, []);

  const [token, setToken] = useState({
    token: sessionStorage.getItem("token"),
  });

  const [company, setCompany] = useState({
    name: "",
  });

  const handleFindAllCompany = async (event) => {
    event.preventDefault();
    CompanyService.findAllCompany(token)
      .then((response) => {
        alert("added successfully *****");
        setCompanies(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message + "patladi token");
      });
  };

  const handleCreate = async (event) => {
    event.preventDefault();

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
    CompanyManagerService.createEmployee(employeeInfo)
      .then(() => {
        alert("added successfully *****");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="employee-register">
      <div className="employee-register-photo-section">
        <div className="employee-register-profile-holder">
          <div className="employee-register-profile-image">
            {image ? (
              <img src={URL.createObjectURL(image)} />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
                alt="Rengoku"
              />
            )}
          </div>
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
        </div>
      </div>
      <div className="employee-register-profil-info">
        <div className="employee-register-information">
          <h2>Employee Registration</h2>
          <form onSubmit={handleCreate}>
            <div className="employee-register-company-section">
              <label htmlFor="employee-register-company-select">
                Select Company:
              </label>
              <select
                id="company-select"
                className="select-style"
                onChange={(event) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    companyName: event.target.value,
                  })
                }
              >
                {/* Burada companyMs nin endpoint' inden gelen Companyler listelenecek */}
                <option value="">Please select a company</option>

                {companies.map((company) => (
                  <option key={company.name} value={company.name}>
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
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        identifynumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Name:</label>
                  <input
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
                  <label>mid name:</label>
                  <input
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
                  <label>Birth-date:</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        dateOfBirth: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="second-6">
                <div className="data">
                  <label>Job-start-date:</label>
                  <input
                    type="text"
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
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        job: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Department:</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        birthdate: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="data">
                  <label>E-Mail</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Phone:</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployeeInfo({
                        ...employeeInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="longside">
              <div className="data">
                <label>Address:</label>
                <input
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
            <button
              type="submit"
              onClick={(e) =>
                setEmployeeInfo({
                  ...employeeInfo,
                  avatar: image,
                })
              }
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateEmployee;
