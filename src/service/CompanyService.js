import axios from "axios";

const LOGIN = "http://localhost:xxxx/auth/create";

class AuthService{
    register(company) { 
        return axios.post(LOGIN,company);
    }

}


export default new AuthService();