import axios from "axios";

const FINDALL_ADMIN = "http://localhost:7070/admin/getalladmin";

// const FINDALL_ADMIN = "https://jsonplaceholder.typicode.com/albums/1/photos";
class AdminService{
    getAllAdmins() {
        
        return axios.get(FINDALL_ADMIN);
    }
}
export default new AdminService();