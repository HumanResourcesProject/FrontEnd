import axios from "axios";

const CREATE_ADMIN_AUTH = "http://localhost:7071/auth/registeradmin";
const FINDALL_ADMIN = "http://localhost:7070/admin/getalladmin";
const GET_ADMIN_INFO = "http://localhost:7070/admin/getfindme";
const UPDATE_PROFILEP = "http://localhost:7070/admin/updateimage";
const UPDATE_ADMININFO = "http://localhost:7070/admin/updateadmin";;

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
    updateAdminInfo(data){
        return axios
        .put(UPDATE_ADMININFO, data, {
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