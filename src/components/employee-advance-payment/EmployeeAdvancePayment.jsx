import React from "react";
import { useState,useEffect} from "react";
import "./employeeAdvancedPayment.scss";
import EmployeeService from "../../service/EmployeeService"

const EmployeeAdvancePayment = () => {
  const [advancePayment, setAdvancePayment] = useState({
    token: sessionStorage.getItem("token"),
    amount: "",
    currency: "tl",
    comment: "",
    advancedPaymentDate:"",
  });
  const [profile, setProfile] = useState([]);
  const [token] = useState({
    token: sessionStorage.getItem("token"),
    role: sessionStorage.getItem("role")

  });
  useEffect(() => {
    EmployeeService.getEmployeeInformations(token).then(
      (response) => {
        setProfile(response.data);
        console.log(profile);
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
    console.log(advancePayment.advancedPaymentDate);
    console.log(newDate);
      if(advancePayment.advancedPaymentDate < newDate){
        alert("Advances cannot be taken in the past.")
        return;
      }
      if(advancePayment.amount ==="" || advancePayment.comment==="" || advancePayment.advancedPaymentDate===""){
        alert("Fill the neccessary fields")
      }else{
        EmployeeService.createadvancepayment(advancePayment).then(
          () =>{
            
            alert("added successfully *****")
          })       
          .catch((error) => {
            alert("unexpected error");
          });
      }
      
    
  };

  
  return (
    <div className="payment-body">
      <form className="payment-form" onSubmit={handleSubmit}>
      <div className="date-part">
        <div className="text">Date</div>
        <input 
        type="date"
        onChange={(event) =>
          setAdvancePayment({
            ...advancePayment,
            advancedPaymentDate: event.target.value,
          })
        }
         />
      </div>
      <div className="amount-part">
        <div className="text">Amount</div>
        <div className="amount">
          <select
            name=""
            id=""
            onChange={(event) =>
              setAdvancePayment({
                ...advancePayment,
                currency: event.target.value,
              })
            }
          >
            <option value="tl">₺</option>
            <option value="dolar">$</option>
            <option value="euro">€</option>
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
