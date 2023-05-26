import axios from "axios";

const LOGIN = "http://35.228.35.18/auth/login";
const REGISTER_ADMIN ="http://35.228.35.18/auth/registeradmin";
const REGISTER_MANAGER ="http://35.228.35.18/auth/registermanager";
const REGISTER_EMPLOYEE ="http://35.228.35.18/auth/registeremployee";
const FORGOT_PASSWORD = "http://35.228.35.18/auth/forgotpassword";

class AuthService{
    login(user) { 
        return axios.post(LOGIN,user,{
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    forgotPassword(data){
        return axios.post(FORGOT_PASSWORD,data,{
            headers: {
                "Content-Type": "application/json"
            }
        })
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