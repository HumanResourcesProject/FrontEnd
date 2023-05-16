import React from "react";
import { useState, useEffect } from "react";
import "./employeeAddLeave.scss";
import EmployeeService from "../../service/EmployeeService";


const EmployeeAddLeave = () => {
  const [addLeaveInfo, setAddLeaveInfo] = useState({
    type: "",
    startDate: "",
    finishDate: "",
    amountOfDay: "",
  });


  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(addLeaveInfo);

    EmployeeService.registerEmployee(addLeaveInfo)
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
    <div className="add-leave">
      <div className="add-leave-info">
        <div className="add-leave-information">
          <h2>Leave Request Page</h2>
        
          <form onSubmit={handleCreate}>
            <div className="form-data">
              <div className="leave-types">
              <select
            name=""
            id=""
            onChange={(event) =>
              setAddLeaveInfo({
                ...addLeaveInfo,
                type: event.target.value,
              })
            }>
            <option value="annual">Annual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="maternity">Maternity Leave</option>
            <option value="paternity">Paternity Leave</option>
            <option value="parental">Parental Leave</option>
            <option value="bereavement">Bereavement Leave</option>
          </select>
              </div>
              <div className="first-part">
                <div className="data">
                  <label>Identify number:</label>
                  <input
                    className="inputs"
                    type="number"
                    onChange={(e) =>
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
                        birthPlace: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="second-part">
                <div className="data">
                  <label>Job-start-date:</label>
                  <input
                  className="inputs"
                    type="text"
                    onChange={(e) =>
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
                        department: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Phone:</label>
                  <input
                    type="number"
                    className="inputs"
                    onChange={(e) =>
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
                      setAddLeaveInfo({
                        ...addLeaveInfo,
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
export default EmployeeAddLeave;
