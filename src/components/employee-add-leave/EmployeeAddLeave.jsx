import React from "react";
import { useState, useEffect } from "react";
import "./employeeAddLeave.scss";
import EmployeeService from "../../service/EmployeeService";
import Select from "react-select";

const EmployeeAddLeave = () => {
  const [addLeaveInfo, setAddLeaveInfo] = useState({
    token: sessionStorage.getItem("token"),
    type: "",
    startDate: "",
    finishDate: "",
    amountOfDay: 0,
  });

  useEffect(() => {
    dateConverter();
  }, [addLeaveInfo.startDate, addLeaveInfo.finishDate]);

  const dateConverter = () => {
    const newStartDate = new Date(addLeaveInfo.startDate);
    const newEndDate = new Date(addLeaveInfo.finishDate);
    const one_day = 1000 * 60 * 60 * 24;
    let result;
    result = Math.ceil(
      (newEndDate.getTime() - newStartDate.getTime()) / one_day
    );
    if (result < 0) {
      setAddLeaveInfo((prevState) => ({ ...prevState, amountOfDay: 0 }));
    } else {
      setAddLeaveInfo((prevState) => ({ ...prevState, amountOfDay: result+1 }));
    }
  };
  const [optionInfo, setOptionInfo] = useState("");
 
  const options = [
    { value: "annual", label: "Annual Leave" },
    { value: "sick", label: "Sick Leave" },
    { value: "maternity", label: "Maternity Leave" },
    { value: "paternity", label: "Paternity Leave" },
    { value: "parental", label: "Parental Leave" },
    { value: "bereavement", label: "Bereavement Leave" },
  ];

  const handleCreate = async (event) => {
    event.preventDefault();
    console.log(addLeaveInfo);

    EmployeeService.createleave(addLeaveInfo)
      .then(() => {
        alert("added successfully *****");
      })
      .catch((error) => {
        alert("unexpected error");
      });
  };

  return (
    <div className="add-leave">
      <div className="add-leave-info">
        <div className="add-leave-information">
          <h2>Leave Request Page</h2>

          <form onSubmit={handleCreate}>
            <div className="form-data">
              <div className="first-part">
                <div className="data">
                  <label>Leave Start Date:</label>
                  <input
                    className="inputs"
                    type="date"
                    min={new Date().toISOString().substring(0, 10)}
                    max="2100-01-01"
                    onChange={(e) =>
                      setAddLeaveInfo({
                        ...addLeaveInfo,
                        startDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="data">
                  <label>Leave Type:</label>
                  <Select className="leavecombobox"
                  defaultValue={optionInfo}
                    onChange={(e) =>
                      setAddLeaveInfo({
                        ...addLeaveInfo,
                        type: e.value,
                      })
                    }             
                    options={options}
                  />
                </div>
              </div>
              <div className="second-part">
                <div className="data">
                  <label>Leave End Date:</label>
                  <input
                    className="inputs"
                    type="date"
                    min={new Date().toISOString().substring(0, 10)}
                    max="2100-01-01"
                    onChange={(e) =>
                      setAddLeaveInfo({
                        ...addLeaveInfo,
                        finishDate: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="data">
                  <label>Leave Date:</label>
                  <input
                    className="inputs"
                    type="number"
                    readOnly
                    value={addLeaveInfo.amountOfDay}
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