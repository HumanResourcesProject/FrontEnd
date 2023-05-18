import axios from "axios";

const FINDALL_MANAGER = "http://localhost:7072/manager/findall";
const GET_MANAGER_INFO = "http://localhost:7072/manager/getfindme";
const UPDATE_MANAGER_INFO = "http://localhost:7072/manager/updatemanager";
const FINDALL_EMPLOYEE = "http://localhost:7072/manager/findallmyemployee";
const FINDALL_EMPLOYEE_EXPENSES = "http://localhost:7075/requirements/manager/findallmyexpenses";
const FINDALL_PENDING_EXPENSES = "http://localhost:7075/requirements/manager/findallmyexpensespending";
const FINDALL_PENDING_EXPENSES_COUNT = "http://localhost:7075/requirements/manager/findallmyexpensescount";
const FINDALL_EMPLOYEE_LEAVES = "http://localhost:7075/requirements/manager/findallmyleaves";
const FINDALL_PENDING_LEAVES = "http://localhost:7075/requirements/manager/findallmyleavespending";
const FINDALL_PENDING_LEAVES_COUNT = "http://localhost:7075/requirements/manager/findallmyleavescount";
const FINDALL_EMPLOYEE_ADVANCEPAYMENT = "http://localhost:7075/requirements/manager/findallmyadvances";
const FINDALL_PENDING_ADVANCEPAYMENT = "http://localhost:7075/requirements/manager/findallmyadvancespending";
const FINDALL_PENDING_ADVANCEPAYMENT_COUNT = "http://localhost:7075/requirements/manager/findallmyadvancescount";
const MANAGER_COUNT = "http://localhost:7072/manager/findallmyemployee";



class CompanyManagerService {
    getAllManager(token){
        return axios.post(FINDALL_MANAGER,token,{
            headers: {
                "Content-Type": "application/json"
              }
        });
    }

    getAllMyEmployee(token){
        return axios.post(FINDALL_EMPLOYEE,token,{
            headers: {
                "Content-Type": "application/json"
              }
        });
    }

    postShortDetails(token){
        return axios.post(GET_MANAGER_INFO,token);
    }
    getManagerInformations(token){
        return axios.post(GET_MANAGER_INFO,token,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    updateManagerInfo(data){
        return axios
        .put(UPDATE_MANAGER_INFO, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
        }
        });
    }

    findallemployeeadvancepayment(token){
        return axios.post(FINDALL_EMPLOYEE_ADVANCEPAYMENT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingadvancepayment(token){
        return axios.post(FINDALL_PENDING_ADVANCEPAYMENT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    
    findallpendingadvancepaymentcount(token){
        return axios.post(FINDALL_PENDING_ADVANCEPAYMENT_COUNT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallemployeeexpenses(token){
        return axios.post(FINDALL_EMPLOYEE_EXPENSES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingexpenses(token){
        return axios.post(FINDALL_PENDING_EXPENSES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingexpensescount(token){
        return axios.post(FINDALL_PENDING_EXPENSES_COUNT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallemployeeleaves(token){
        return axios.post(FINDALL_EMPLOYEE_LEAVES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingleaves(token){
        return axios.post(FINDALL_PENDING_LEAVES,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    findallpendingleavescount(token){
        return axios.post(FINDALL_PENDING_LEAVES_COUNT,token, {
            headers: {
                'Content-Type': 'application/json'
          }
          });
      }
    


}
export default new CompanyManagerService();

