import axios from "axios";

const FINDALL_ADMIN = "http://localhost:7070/admin/getalladmin";
const CREATE_ADMIN = 'http://localhost:7070/admin/createadmin';
const GET_ADMIN_INFO = "http://localhost:7070/admin/getadmin";
const UPDATE_PROFILEP = "http://localhost:7070/admin/imagescloud";
const UPDATE_ADMININFO = "http://localhost:7070/admin/updateadmin";;
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
        return axios.post(SHORT_DETAIL,token);
    }

    
}


export default new AdminService();