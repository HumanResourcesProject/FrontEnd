import axios from "axios";

const CREATE_ADMIN_AUTH = "http://35.228.35.18/auth/registeradmin";
const FINDALL_ADMIN = "http://35.228.35.18/admin/getalladmin";
const GET_ADMIN_INFO = "http://35.228.35.18/admin/getfindme";
const UPDATE_PROFILEP = "http://35.228.35.18/admin/updateimage";
const ADMIN_UPDATE_INFO = "http://35.228.35.18/admin/updateadmin";
const ADMIN_UPDATE_INFO_STRING = "http://35.228.35.18/admin/updateadminnophoto";
const TOTAL_ADMIN_COUNT = "http://35.228.35.18/admin/getalladmincount";
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