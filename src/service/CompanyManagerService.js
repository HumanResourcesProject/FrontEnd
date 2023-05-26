import axios from "axios";

const FINDALL_MANAGER = "http://35.228.35.18/manager/findall";
const GET_MANAGER_INFO = "http://35.228.35.18/manager/getfindme";
const UPDATE_MANAGER_INFO = "http://35.228.35.18/manager/updatemanager";
const UPDATE_MANAGER_INFO_STRING = "http://35.228.35.18/manager/updatemanagernophoto";
const FINDALL_EMPLOYEE = "http://35.228.35.18/manager/findallmyemployee";
const FINDALL_MY_EMPLOYEE_COUNT = "http://35.228.35.18/manager/findallmyemployeecount";
const TOTAL_MANAGER_COUNT = "http://35.228.35.18/manager/getallmanagercount";




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
    
    totalmanagercount(token){
        return axios.get(TOTAL_MANAGER_COUNT,token);
    }
    

  


}
export default new CompanyManagerService();

