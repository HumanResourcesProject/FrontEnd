import axios from "axios";

const LOGIN = "http://localhost:7070/auth/login";
const REGISTER_ADMIN ="http://localhost:7070/auth/registeradmin";
const REGISTER_MANAGER ="http://localhost:7070/auth/registermanager";
const REGISTER_EMPLOYEE ="http://localhost:7070/auth/registeremployee";

class AuthService{
    login(user) { 
        return axios.post(LOGIN,user);
    }
    registerAdmin(info){
        return axios.post(REGISTER_ADMIN,info,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    registerManager(info){
        return axios.post(REGISTER_MANAGER,info,{
            headers: {
                "Content-Type": "application/json"
              }
        })
    }
    registerEmployee(info){
        return axios.post(REGISTER_EMPLOYEE,info,{
            headers: {
                "Content-Type": "application/json"
              }
        })
    }

}


export default new AuthService();