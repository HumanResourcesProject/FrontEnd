import axios from "axios";

const FINDALL_EMPLOYEE = "http://35.228.35.18/employee/findallemployee";
const GET_EMPLOYEE_INFO = "http://35.228.35.18/employee/findme";
const EMPLOYEE_UPDATE_INFO = "http://35.228.35.18/employee/updateemployee";
const EMPLOYEE_UPDATE_INFO_STRING = "http://35.228.35.18/employee/updateemployeenophoto";
const CREATE_ADVANCE_PAYMENT= "http://35.228.35.18/employee/createadvancepayment"
const CREATE_LEAVE  = "http://35.228.35.18/employee/createleave";
const CREATE_EXPENSE = "http://35.228.35.18/employee/createexpense";
const EMPLOYEE_COUNT = "http://35.228.35.18/employee/findallmyemployeecountformanager";
const MANAGER_COUNT =   "http://35.228.35.18/employee/findallmymanagercount";
const EMPLOYEE_AVERAGE_AGE_MANAGER = "http://35.228.35.18/employee/findallmyemployeeavarageage";
const EMPLOYEE_AVERAGE_AGE = "http://35.228.35.18/employee/findallmyemployeeavarageageforcompany";
const ANNUAL_EXPENSE_COMPANY = "http://35.228.35.18/employee/findallmycompanyexpenseforyear";
const MONTHLY_EXPENSE_COMPANY = "http://35.228.35.18/employee/findallmycompanyexpenseformonth";
const MY_ANNUAL_EXPENSE = "http://35.228.35.18/employee/findallmyemployeesalaryforyear";
const MY_MONTHLY_EXPENSE = "http://35.228.35.18/employee/findallmyemployeesalaryformonth";
const TOTAL_EMPLOYEE_COUNT = "http://35.228.35.18/employee/getallemployeecount";


class EmployeeService {
    getAllEmployee(data){
        return axios.post(FINDALL_EMPLOYEE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    getEmployeeInformations(token){
        return axios.post(GET_EMPLOYEE_INFO,token,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    updateEmployeeInformations(data){
        return axios.put(EMPLOYEE_UPDATE_INFO,data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    updateEmployeeInformationsString(data){
        return axios.put(EMPLOYEE_UPDATE_INFO_STRING,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    createadvancepayment(data){
        return axios.post(CREATE_ADVANCE_PAYMENT,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    createleave(data){
        return axios.post(CREATE_LEAVE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    createexpense(data){
        return axios.post(CREATE_EXPENSE,data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    employeeCount(data){
        return axios.post(EMPLOYEE_COUNT,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    managerCount(data)
    {
        return axios.post(MANAGER_COUNT,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    employeeAverageAge(data){
        return axios.post(EMPLOYEE_AVERAGE_AGE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    myEmployeeAverageAge(data){
        return axios.post(EMPLOYEE_AVERAGE_AGE_MANAGER,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    annualExpense(data){
        return axios.post(ANNUAL_EXPENSE_COMPANY,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    monthlyExpense(data){
        return axios.post(MONTHLY_EXPENSE_COMPANY,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    myAnnualExpense(data){
        return axios.post(MY_ANNUAL_EXPENSE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    myMonthlyExpense(data){
        return axios.post(MY_MONTHLY_EXPENSE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    totalemployeecount(token){
        return axios.get(TOTAL_EMPLOYEE_COUNT,token);
    }
}
export default new EmployeeService();