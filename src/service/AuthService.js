import axios from "axios";

const LOGIN = "http://localhost/auth/login";
const REGISTER_ADMIN ="http://localhost/auth/registeradmin";
const REGISTER_MANAGER ="http://localhost/auth/registermanager";
const REGISTER_EMPLOYEE ="http://localhost/auth/registeremployee";
const FORGOT_PASSWORD = "http://localhost/auth/forgotpassword";

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