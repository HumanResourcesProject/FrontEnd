import React from "react";
import { useState,useEffect} from "react";
import "./employeeAdvancePayment.scss";
import EmployeeService from "../../service/EmployeeService"

const EmployeeAdvancePayment = () => {
  const [advancePayment, setAdvancePayment] = useState({
    token: sessionStorage.getItem("token"),
    amount: "",
    currency: "TL",
    comment: "",
    advancedPaymentDate:""
  });
  const [profile, setProfile] = useState({
    salary:"",
  });
  
  const [token] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role")

  });
  useEffect(() => {
    EmployeeService.getEmployeeInformations(token).then(
      (response) => {
        setProfile({
          ...profile,
          salary: response.data.salary *3,
        }) 
        
        
      }
    );
  }, []);
  
  const handleSubmit = async (event) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    let newDate = "";
    if(month< 10) {
      newDate = year + "-0" + month + "-" + day;
    }else{
      newDate = year + "-" + month + "-" + day;
    }
    

    event.preventDefault();
      if(advancePayment.advancedPaymentDate < newDate){
      
        alert("Advances cannot be taken in the past.")
        return;
      }
      if(advancePayment.amount ==="" || advancePayment.comment==="" || advancePayment.advancedPaymentDate===""){
        alert("Fill the neccessary fields")
      }else{
        console.log(advancePayment);
        EmployeeService.createadvancepayment(advancePayment).then(
          () =>{
            
            alert("added successfully *****")
          })       
          .catch((error) => {
            alert("unexpected error");
          });
      }
      
    
  };


  const [symbol, setSymbol] = useState();

  useEffect(() => {
    if (advancePayment.currency === "TL") {
      setSymbol("₺");
    } else if (advancePayment.currency === "DOLAR") {
      setSymbol("$");
    } else if (advancePayment.currency === "EURO") {
      setSymbol("€");
    }
  }, [advancePayment.currency]);


  return (
    <div className="payment-body">
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
        <div className="currency-text">{advancePayment.amount || ""} {symbol}, Max: {profile.salary} {symbol}</div>
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
            max={profile.salary}
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
        <button type="submit"  className="button-apply">Apply</button>
      </div>
      </form>
    </div>
  );
};
export default EmployeeAdvancePayment;
