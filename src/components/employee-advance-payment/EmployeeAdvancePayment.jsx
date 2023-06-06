import { useState, useEffect } from "react";
import "./employeeAdvancePayment.scss";
import EmployeeService from "../../service/EmployeeService";
import * as React from "react";
import { ExchangeService } from "../../service/ExchangeService";
import EmployeeAdvanceImage from "../../assets/images/employee-advancepayment.svg";


const EmployeeAdvancePayment = () => {
  const [rates, setRates] = React.useState(null);

  React.useEffect(() => {
    const getFxData = () => {
      ExchangeService()
        .then((data) => {
          console.log("fx data:", data);
          setRates(data.rates);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFxData();
  }, []);

  const [advancePayment, setAdvancePayment] = useState({
    token: sessionStorage.getItem("token"),
    amount: "",
    currency: "TL",
    comment: "",
    advancedPaymentDate: "",
  });
  const [profile, setProfile] = useState({
    salary: "",
  });
  const [value, setValue] = useState();

  const [token] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role"),
  });
  useEffect(() => {
    EmployeeService.getEmployeeInformations(token).then((response) => {
      setProfile({
        ...profile,
        salary: response.data.salary * 3,
      });
      setMax(response.data.salary * 3);
    });
  }, []);

  const handleSubmit = async (event) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    let newDate = "";
    if (month < 10) {
      newDate = year + "-0" + month + "-" + day;
    } else {
      newDate = year + "-" + month + "-" + day;
    }

    event.preventDefault();
    if (advancePayment.advancedPaymentDate < newDate) {
      alert("Advances cannot be taken in the past.");
      return;
    }
    if (
      advancePayment.amount === "" ||
      advancePayment.comment === "" ||
      advancePayment.advancedPaymentDate === ""
    ) {
      alert("Fill the neccessary fields");
    } else {
      console.log(advancePayment);
      EmployeeService.createadvancepayment(advancePayment)
        .then(() => {
          alert("added successfully *****");
        })
        .catch((error) => {
          alert("unexpected error");
        });
    }
  };
  const [max, setMax] = useState();
  const [symbol, setSymbol] = useState();

  useEffect(() => {
    setValue(advancePayment.amount);
    setMax(profile.salary);
    setSymbol("₺");
    if (advancePayment.currency === "TL") {
      setSymbol("₺");
      setValue(advancePayment.amount);
      setMax(profile.salary);
    } else if (advancePayment.currency === "DOLAR") {
      setSymbol("$");
      setValue(Number(advancePayment.amount / rates.USD).toFixed(2));
      setMax(Number(profile.salary * rates.USD).toFixed(2));
    } else if (advancePayment.currency === "EURO") {
      setSymbol("€");
      setValue(Number(advancePayment.amount / rates.EUR).toFixed(2));
      setMax(Number(profile.salary * rates.EUR).toFixed(2));
    }
  }, [advancePayment.currency, advancePayment.amount]);

  return (
    <div className="payment-body">
      <div className="left-advance">
        <div className="advance-mini-part">
        <h2>Advance Payment Page</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="date-part">
            <div className="text">Date</div>
            <input
              type="date"
              className="date-input"
              onChange={(event) =>
                setAdvancePayment({
                  ...advancePayment,
                  advancedPaymentDate: event.target.value,
                })
              }
            />
          </div>
          <div className="amount-part">
            <div className="amount-part-mini">
              <div className="amount-text">Amount</div>
              <div className="currency-text">
                {value} ₺, Max: {max} {symbol}
              </div>
            </div>
            <div className="amount">
              <select
                className="amount-select"
                onChange={(event) =>
                  setAdvancePayment({
                    ...advancePayment,
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
                max={max}
                onChange={(e) =>
                  setAdvancePayment({
                    ...advancePayment,
                    amount: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="comment-part">
            <div className="text">Reason</div>
            <textarea
              className="comment-textarea"
              type="text"
              maxLength={200}
              onChange={(e) =>
                setAdvancePayment({
                  ...advancePayment,
                  comment: e.target.value,
                })
              }
            />
          </div>
          <div className="button-part">
            <button type="submit" className="button-apply">
              Apply
            </button>
          </div>
        </form>
        </div>

      </div>
      <div className="right">
        <img className="employee-advance-image" src={EmployeeAdvanceImage} alt="" />
      </div>
    </div>
  );
};
export default EmployeeAdvancePayment;
