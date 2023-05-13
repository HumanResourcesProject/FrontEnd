import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/manager/findall";
const CREATE_EMPLOYEE = "http://localhost:7071/auth/registeremployee";
const GET_MANAGER_INFO = "http://localhost:7072/manager/getfindme";
const UPDATE_MANAGER_INFO = "http://localhost:7072/manager/updatemanager";
const UPDATE_PROFILEP = "http://localhost:7072/manager/updateimage";
const CREATE_Manager_AUTH = "http://localhost:7071/auth/registermanager";




class CompanyManagerService {
    getAllManager(){
        return axios.get(FINDALL_MANAGER);
    }

    createCompanyManager(manager){
        return axios.post(CREATE_Manager_AUTH, manager,{
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }
    createEmployee(employee){
        return axios.post(CREATE_EMPLOYEE, employee,{
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }

    postShortDetails(token){
        return axios.post(GET_MANAGER_INFO,token);
    }
    getManagerInformations(token){
        return axios.post(GET_MANAGER_INFO,token,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    updateManagerInfo(data){
        return axios
        .put(UPDATE_MANAGER_INFO, data, {
          headers: {
            'Content-Type': 'application/json'
        }
        });

    }
    getManagerProfilePhoto(formData){
        return axios.post(UPDATE_PROFILEP, formData)
    }
}
export default new CompanyManagerService();

