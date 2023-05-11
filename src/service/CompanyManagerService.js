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
}
<<<<<<<<< Temporary merge branch 1
export default new CompanyManagerService();
=========
}

>>>>>>>>> Temporary merge branch 2
=========
export default new CompanyManagerService();