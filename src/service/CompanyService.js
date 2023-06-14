import axios from "axios";

const CREATE_COMPANY = "http://localhost:7073/company/createcompany";
const findAllCompany = "http://localhost:7073/company/findall";
const TOTAL_COMPANY_COUNT = "http://localhost:7073/company/getallcompanycount";


class CompanyService{
    register(company) { 
        return axios.post(CREATE_COMPANY,company,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    findAllCompany(token) { 
        return axios.post(findAllCompany,token,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
    totalcompanycount(token){
        return axios.get(TOTAL_COMPANY_COUNT,token);
    }
}

export default new CompanyService();