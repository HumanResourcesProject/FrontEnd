import axios from "axios";

const CREATE_ADMIN_AUTH = "http://localhost/auth/registeradmin";
const FINDALL_ADMIN = "http://localhost/admin/getalladmin";
const GET_ADMIN_INFO = "http://localhost/admin/getfindme";
const UPDATE_PROFILEP = "http://localhost/admin/updateimage";
const ADMIN_UPDATE_INFO = "http://localhost/admin/updateadmin";
const ADMIN_UPDATE_INFO_STRING = "http://localhost/admin/updateadminnophoto";
const TOTAL_ADMIN_COUNT = "http://localhost/admin/getalladmincount";
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
    totaladmincount(token){
        return axios.get(TOTAL_ADMIN_COUNT,token);
    }
    
}




export default new AdminService();