import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/companymanager/findall";
const CREATE_MANAGER = "http://localhost:7070/admin/createcompanymanager";
const CREATE_EMPLOYEE = "http://localhost:7072/companymanager/createemployee";
const SHORT_DETAIL = 'http://localhost:7072/companymanager/getshortdetail';
const GET_MANAGER_INFO = "http://localhost:7072/companymanager/getmanager";
const UPDATE_MANAGER_INFO = "http://localhost:7072/companymanager/updatecompanymanager";
const UPDATE_PROFILEP = "http://localhost:7072/companymanager/imagescloud";




class CompanyManagerService {
    getAllManager(){
        return axios.get(FINDALL_MANAGER);
    }

    createCompanyManager(manager){
        return axios.post(CREATE_MANAGER, manager,{
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
        return axios.post(SHORT_DETAIL,token);
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

