import axios from "axios";

const FINDALL_ADMIN = "https://jsonplaceholder.typicode.com/albums/1/photos";
// http://localhost:7070:/api/v1/admin/findall

const CREATE_ADMIN = 'http://localhost:7070/admin/createadmin'
class AdminService{
    getAllAdmins() {
        return axios.get(FINDALL_ADMIN);
    }


    postCreateAdmin(){
        return axios.post(CREATE_ADMIN)
    }
}


export default new AdminService();