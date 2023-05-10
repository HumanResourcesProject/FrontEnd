import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/companymanager/getallmanager";
const CREATE_MANAGER = "http://localhost:7072/companymanager/createcompanymanager";

class CompanyManagerService {
    getAllManager(){
        return axios.get(FINDALL_MANAGER);
    }

    createCompanyManager(admin){
        return axios.post(CREATE_MANAGER, manager,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }
}