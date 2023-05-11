import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/companymanager/getallmanager";
const CREATE_MANAGER = "http://localhost:7072/companymanager/createcompanymanager";
const SHORT_DETAIL = 'http://localhost:7072/companymanager/getshortdetail';

class CompanyManagerService {
    getAllManager(){
        return axios.get(FINDALL_MANAGER);
    }

    createCompanyManager(manager){
        return axios.post(CREATE_MANAGER, manager,{
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // }
        });

    }
    postShortDetails(token){
        return axios.post(SHORT_DETAIL,token);
    }
}
export default new CompanyManagerService();