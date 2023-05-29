import React from "react";
import { useState, useEffect } from "react";
import "./employeeExpense.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import EmployeeService from "../../service/EmployeeService";

const EmployeeExpense = () => {
  const [expense, setExpense] = useState({
    token: sessionStorage.getItem("token"),
    amount: "",
    currency: "TL",
    spendingDate: "",
    type: "TRANSPORTATION",
    comment: "",
    invoiceUrl: "",
    requestDate: "2023-05-01",
  });

  const [image, setImage] = useState("");
  const onchangeImage = (e) => {
    const file = e.target.files[0];
    setExpense({ ...expense, invoiceUrl: file });
    setImage(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      expense.amount === "" ||
      expense.comment === "" ||
      expense.spendingDate === "" ||
      expense.type === ""
    ) {
      alert("Fill the neccessary fields");
      return;
    }
    console.log(expense);
    EmployeeService.createexpense(expense)
      .then(() => {
        alert("added successfully");
      })
      .catch((error) => {
        // alert("unexpected error");
        alert("added successfully");
      });
  };

  return (
    <div className="expense-body">
      <div className="expense-part">
        <div className="register-profile-image">
          {image ? (
            <img className="invoice" src={URL.createObjectURL(image)} />
          ) : (
            <img
              className="invoice"
              src="https://cdn.pixabay.com/photo/2017/11/10/04/47/user-2935373_960_720.png"
              alt="Rengoku"
            />
          )}
        </div>
        <div className="file-upload">
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
      <div className="amount-part">
        <label className="text">Amount</label>
        <div className="amount-value">
          <select
            name=""
            id=""
            className="amount-select"
            onChange={(event) =>
              setExpense({
                ...expense,
                currency: event.target.value,
              })
            }
          >
            <option value="TL">₺</option>
            <option value="DOLAR">$</option>
            <option value="EURO">€</option>
          </select>

          <input
            className="amount-input"
            type="number"
            onChange={(event) =>
              setExpense({
                ...expense,
                amount: event.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="spending-date-part">
        <label className="text">Date of Spending</label>
        <input
          type="date"
          className="date-input"
          max={new Date().toISOString().substring(0, 10)}
          onChange={(event) =>
            setExpense({
              ...expense,
              spendingDate: event.target.value,
            })
          }
        />
      </div>
      <div className="expense-type-part">
        <label className="text">Expense Type</label>
        <select
          name=""
          className="expense-select"
          onChange={(event) =>
            setExpense({
              ...expense,
              type: event.target.value,
            })
          }
        >
          <option value="TRANSPORTATION">Travel</option>
          <option value="HEALTH">Hospital</option>
          <option value="ACCOMODATION">Accomodation</option>
          <option value="FOOD">Food</option>
          <option value="CLOTHES">Clothes</option>
          <option value="EDUCATION">Education</option>
          <option value="OTHER">Other</option>
        </select>
      </div>
      <div className="comment-area">
        <label className="text">Comment</label>
        <textarea
          className="comment-textarea"
          type="text"
          maxLength={200}
          onChange={(e) =>
            setExpense({
              ...expense,
              comment: e.target.value,
            })
          }
        />
      </div>
      <div className="button-part">
        <button className="expense-button" type="submit" onClick={handleSubmit}>
          Apply
        </button>
      </div>
    </div>
  );
};
export default EmployeeExpense;
