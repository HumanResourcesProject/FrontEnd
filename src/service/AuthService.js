import axios from "axios";

const LOGIN = "http://localhost:7071/auth/login";

class AuthService{
    login(user) { 
        return axios.post(LOGIN,user);
    }

}


export default new AuthService();