import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7074/employee/getallmanager";
const GET_MANAGER_INFO = "http://localhost:7074/employee/findme";
const CREATE_ADVANCE_PAYMENT= "http://localhost:7074/employee/createadvancepayment"


class EmployeeService {
    getAllManager(){
        return axios.get(FINDALL_MANAGER);
    }
    getEmployeeInformations(token){
        return axios.post(GET_MANAGER_INFO,token,{
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
}
export default new EmployeeService();