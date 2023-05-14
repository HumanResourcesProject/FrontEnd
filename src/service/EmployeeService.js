import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7074/employee/getallmanager";
const GET_MANAGER_INFO = "http://localhost:7074/employee/getfindme";


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
}
export default new EmployeeService();