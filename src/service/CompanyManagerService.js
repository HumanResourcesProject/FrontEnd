import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/companymanager/findall";
const CREATE_MANAGER = "http://localhost:7070/admin/createcompanymanager";
const SHORT_DETAIL = 'http://localhost:7072/companymanager/getshortdetail';

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

    postShortDetails(token){
        return axios.post(SHORT_DETAIL,token);
    }

}
export default new CompanyManagerService();

