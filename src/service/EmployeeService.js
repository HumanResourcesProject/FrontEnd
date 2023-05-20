import axios from "axios";

const FINDALL_EMPLOYEE = "http://localhost:7074/employee/findallemployee";
const GET_EMPLOYEE_INFO = "http://localhost:7074/employee/findme";
const EMPLOYEE_UPDATE_INFO = "http://localhost:7074/employee/updateemployee";
const EMPLOYEE_UPDATE_INFO_STRING = "http://localhost:7074/employee/updateemployeenophoto";
const CREATE_ADVANCE_PAYMENT= "http://localhost:7074/employee/createadvancepayment"
const CREATE_LEAVE  = "http://localhost:7074/employee/createleave";
const CREATE_EXPENSE = "http://localhost:7074/employee/createexpense";

const EMPLOYEE_COUNT = "http://localhost:7074/employee/findallmyemployeecount";
const MANAGER_COUNT =   "http://localhost:7074/employee/findallmymanagercount";

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
}
export default new EmployeeService();