import axios from "axios";

const LOGIN = "";

class AuthService{
    getAllAdmins() { 
        return axios.get(LOGIN);
    }

    createCompanyManager(manager){
        return axios.post(CREATE_MANAGER, manager,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }
}
export default new CompanyManagerService();
