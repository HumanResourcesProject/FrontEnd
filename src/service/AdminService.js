import axios from "axios";

const FINDALL_ADMIN = "http://localhost:7070/admin/getalladmin";


const CREATE_ADMIN = 'http://localhost:7070/admin/createadmin'
// const FINDALL_ADMIN = "https://jsonplaceholder.typicode.com/albums/1/photos";
class AdminService{
    getAllAdmins() {
        
        return axios.get(FINDALL_ADMIN);
    }

    postCreateAdmin(admin){
        return axios.post(CREATE_ADMIN, admin,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }
}


export default new AdminService();