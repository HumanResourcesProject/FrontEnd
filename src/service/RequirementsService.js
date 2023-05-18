import axios from "axios";

const FINDALL_LEAVE  = "http://localhost:7075/requirements/employee/findallmyleaves";
const FINDALL_ADVANCE_PAYMENT  = "http://localhost:7075/requirements/employee/findallmyadvances";
const FINDALL_EXPENSE = "http://localhost:7075/requirements/employee/findallmyexpenses";
const FINDALL_EMPLOYEE_EXPENSES = "http://localhost:7075/requirements/manager/findallmyexpenses";
const FINDALL_PENDING_EXPENSES = "http://localhost:7075/requirements/manager/findallmyexpensespending";
const FINDALL_PENDING_EXPENSES_COUNT = "http://localhost:7075/requirements/manager/findallmyexpensescount";
const FINDALL_EMPLOYEE_LEAVES = "http://localhost:7075/requirements/manager/findallmyleaves";
const FINDALL_PENDING_LEAVES = "http://localhost:7075/requirements/manager/findallmyleavespending";
const FINDALL_PENDING_LEAVES_COUNT = "http://localhost:7075/requirements/manager/findallmyleavescount";
const FINDALL_EMPLOYEE_ADVANCEPAYMENT = "http://localhost:7075/requirements/manager/findallmyadvances";
const FINDALL_PENDING_ADVANCEPAYMENT = "http://localhost:7075/requirements/manager/findallmyadvancespending";
const FINDALL_PENDING_ADVANCEPAYMENT_COUNT = "http://localhost:7075/requirements/manager/findallmyadvancescount";

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
    
    
}
export default new EmployeeService();