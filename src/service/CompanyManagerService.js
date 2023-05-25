import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/manager/findall";
const GET_MANAGER_INFO = "http://localhost:7072/manager/getfindme";
const UPDATE_MANAGER_INFO = "http://localhost:7072/manager/updatemanager";
const UPDATE_MANAGER_INFO_STRING = "http://localhost:7071/admin/updatemanagernophoto";
const FINDALL_EMPLOYEE = "http://localhost:7072/manager/findallmyemployee";
const FINDALL_MY_EMPLOYEE_COUNT = "http://localhost:7072/manager/findallmyemployeecount";




class CompanyManagerService {
    getAllManager(token){
        return axios.post(FINDALL_MANAGER,token,{
            headers: {
                "Content-Type": "application/json"
              }
        });
    }

    getAllMyEmployee(token){
        return axios.post(FINDALL_EMPLOYEE,token,{
            headers: {
                "Content-Type": "application/json"
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
    updateManagerInformations(data){
        return axios.put(UPDATE_MANAGER_INFO,data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    updateManagerInformationsString(data){
        return axios.put(UPDATE_MANAGER_INFO_STRING,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    findAllMyEmployeeCount(data){
        return axios.post(FINDALL_MY_EMPLOYEE_COUNT,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    

  


}
export default new CompanyManagerService();

