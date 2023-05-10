import axios from "axios";

const FINDALL_ADMIN = "http://localhost:7070/admin/getalladmin";


const CREATE_ADMIN = 'http://localhost:7070/admin/createadmin';

const SHORT_DETAIL = 'http://localhost:7070/admin/getshortdetail';

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
    postShortDetails(token){
        return axios.post(SHORT_DETAIL,token);
    }

    
}


export default new AdminService();