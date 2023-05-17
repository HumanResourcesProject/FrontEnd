import axios from "axios";

const FINDALL_EMPLOYEE = "http://localhost:7074/employee/findallemployee";
const GET_EMPLOYEE_INFO = "http://localhost:7074/employee/findme";
const EMPLOYEE_UPDATE_INFO = "http://localhost:7074/employee/updateemployee";
const CREATE_ADVANCE_PAYMENT= "http://localhost:7074/employee/createadvancepayment"
const CREATE_LEAVE  = "http://localhost:7074/employee/createleave";
const FINDALL_LEAVE  = "http://localhost:7074/employee/myleavefindall";

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
    updateEmployeeInformations(token){
        return axios.put(EMPLOYEE_UPDATE_INFO,token,{
            headers: {
                'Content-Type': 'multipart/form-data'
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
    findallleave(data){
        return axios.post(FINDALL_LEAVE,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
export default new EmployeeService();