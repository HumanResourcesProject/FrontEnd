import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/manager/findall";
const GET_MANAGER_INFO = "http://localhost:7072/manager/getfindme";
const UPDATE_MANAGER_INFO = "http://localhost:7072/manager/updatemanager";
const FINDALL_EMPLOYEE = "http://localhost:7072/manager/findallmyemployee";





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
    updateManagerInfo(data){
        return axios
        .put(UPDATE_MANAGER_INFO, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
        }
        });
    }
    
    

  


}
export default new CompanyManagerService();

