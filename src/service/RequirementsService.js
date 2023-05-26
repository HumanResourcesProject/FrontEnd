import axios from "axios";

const FINDALL_LEAVE  = "http://35.228.35.18/requirements/employee/findallmyleaves";
const FINDALL_ADVANCE_PAYMENT  = "http://35.228.35.18/requirements/employee/findallmyadvances";
const FINDALL_EXPENSE = "http://35.228.35.18/requirements/employee/findallmyexpenses";
const FINDALL_EMPLOYEE_EXPENSES = "http://35.228.35.18/requirements/manager/findallmyexpenses";
const FINDALL_PENDING_EXPENSES = "http://35.228.35.18/requirements/manager/findallmyexpensespending";
const FINDALL_PENDING_EXPENSES_COUNT = "http://35.228.35.18/requirements/manager/findallmyexpensescount";
const FINDALL_EMPLOYEE_LEAVES = "http://35.228.35.18/requirements/manager/findallmyleaves";
const FINDALL_PENDING_LEAVES = "http://35.228.35.18/requirements/manager/findallmyleavespending";
const FINDALL_PENDING_LEAVES_COUNT = "http://35.228.35.18/requirements/manager/findallmyleavescount";
const FINDALL_EMPLOYEE_ADVANCEPAYMENT = "http://35.228.35.18/requirements/manager/findallmyadvances";
const FINDALL_PENDING_ADVANCEPAYMENT = "http://35.228.35.18/requirements/manager/findallmyadvancespending";
const FINDALL_PENDING_ADVANCEPAYMENT_COUNT = "http://35.228.35.18/requirements/manager/findallmyadvancescount";
const APPROVE_ADVANCEPAYMENT= "http://35.228.35.18/requirements/manager/approveadvancepayment";
const REJECT_ADVANCEPAYMENT= "http://35.228.35.18/requirements/manager/rejectadvancepayment";
const APPROVE_EXPENSE= "http://35.228.35.18/requirements/manager/approveexpense";
const REJECT_EXPENSE= "http://35.228.35.18/requirements/manager/rejectexpense";
const APPROVE_LEAVE= "http://35.228.35.18/requirements/manager/approveleave";
const REJECT_LEAVE= "http://35.228.35.18/requirements/manager/rejectleave";


class EmployeeService {
    findAllLeave(data){
        return axios.post(FINDALL_LEAVE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    findAllAdvancePayment(data){
        return axios.post(FINDALL_ADVANCE_PAYMENT,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    findAllExpense(data){
        return axios.post(FINDALL_EXPENSE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    findallemployeeadvancepayment(token){
        return axios.post(FINDALL_EMPLOYEE_ADVANCEPAYMENT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingadvancepayment(token){
        return axios.post(FINDALL_PENDING_ADVANCEPAYMENT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    
    findallpendingadvancepaymentcount(token){
        return axios.post(FINDALL_PENDING_ADVANCEPAYMENT_COUNT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallemployeeexpenses(token){
        return axios.post(FINDALL_EMPLOYEE_EXPENSES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingexpenses(token){
        return axios.post(FINDALL_PENDING_EXPENSES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingexpensescount(token){
        return axios.post(FINDALL_PENDING_EXPENSES_COUNT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallemployeeleaves(token){
        return axios.post(FINDALL_EMPLOYEE_LEAVES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingleaves(token){
        return axios.post(FINDALL_PENDING_LEAVES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingleavescount(token){
        return axios.post(FINDALL_PENDING_LEAVES_COUNT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
      approveadvencepayment(data){
        return axios.put(APPROVE_ADVANCEPAYMENT,data, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
      rejectadvencepayment(data){
        return axios.put(REJECT_ADVANCEPAYMENT,data, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
      approveexpense(data){
        return axios.put(APPROVE_EXPENSE,data, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
      rejectexpense(data){
        return axios.put(REJECT_EXPENSE,data, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
      approveleave(data){
        return axios.put(APPROVE_LEAVE,data, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
      rejectleave(data){
        return axios.put(REJECT_LEAVE,data, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
}
export default new EmployeeService();