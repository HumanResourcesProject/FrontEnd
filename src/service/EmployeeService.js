import axios from "axios";

const FINDALL_EMPLOYEE = "http://localhost:7074/employee/findallemployee";
const GET_EMPLOYEE_INFO = "http://localhost:7074/employee/getfindme";
const EMPLOYEE_UPDATE_INFO = "http://localhost:7074/employee/getfindme"; //düzenlencek

class EmployeeService {
    getAllEmployee(){
        return axios.get(FINDALL_EMPLOYEE);
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
                'Content-Type': 'application/json'
            }
        });
    }
}
export default new EmployeeService();