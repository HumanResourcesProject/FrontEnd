import axios from "axios";

const CREATE_COMPANY = "http://localhost:7073/company/createcompany";

class CompanyService{
    register(company) { 
        return axios.post(CREATE_COMPANY,company,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

}


export default new CompanyService();