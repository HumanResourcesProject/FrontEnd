import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7074/employee/getallmanager";


class EmployeeService {
    getAllManager(){
        return axios.get(FINDALL_MANAGER);
    }
}
export default new EmployeeService();