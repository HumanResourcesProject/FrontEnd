import axios from "axios";

const CREATE_ADMIN_AUTH = "http://localhost:7070/auth/registeradmin";
const FINDALL_ADMIN = "http://localhost:7071/admin/getalladmin";
const GET_ADMIN_INFO = "http://localhost:7071/admin/getfindme";
const UPDATE_PROFILEP = "http://localhost:7071/admin/updateimage";
const ADMIN_UPDATE_INFO = "http://localhost:7071/admin/updateadmin";
const ADMIN_UPDATE_INFO_STRING = "http://localhost:7071/admin/updateadminnophoto";
class AdminService{
    getAllAdmins() {
        return axios.get(FINDALL_ADMIN);
    }


    postCreateAdmin(admin){
        return axios.post(CREATE_ADMIN_AUTH, admin,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

    }
    getAdminInformations(token){
        return axios.post(GET_ADMIN_INFO,token,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    getAdminProfilePhoto(formData){
        return axios.post(UPDATE_PROFILEP, formData)
    }
    updateAdminInformations(data){
        return axios.put(ADMIN_UPDATE_INFO,data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    updateAdminInformationsString(data){
        return axios.put(ADMIN_UPDATE_INFO_STRING,data,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    postShortDetails(token){
        return axios.post(GET_ADMIN_INFO,token);
    }

    
}




export default new AdminService();