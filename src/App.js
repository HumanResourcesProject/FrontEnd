import React from "react";
import AdminPage from "./pages/admin-main-page/AdminPage";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateAdminPage from "./pages/admin-create-page/CreateAdminPage";
import AdminListPage from "./pages/admin-list-page/AdminListPage";
import AdminProfilPage from "./pages/admin-profil-page/AdminProfilPage";
import CreateCompanyPage from "./pages/create-company-page/CreateCompanyPage";
import ManagerMainPage from "./pages/manager-main-page/ManagerMainPage";
import { LoginPage } from "./pages/login-page/LoginPage";
import CompanyManagerCreatePage from "./pages/company-manager-create-page/CompanyManagerCreatePage";
import CompanyManagerListTablePage from "./pages/company-manager-list-table-page/CompanyManagerListTablePage";
import ManagerListManagerPage from "./pages/manager-list-manager-page/ManagerListManagerPage";
import ManagerListPage from "./pages/manager-list-page/ManagerListPage";
import EmployeeRegister from "./pages/employee-register-page/EmployeeRegister";
import ManagerMyProfilePage from "./pages/manager-my-profile-page/ManagerMyProfilePage";
import ManagerUpdateProfilePage from "./pages/manager-update-page/ManagerUpdateProfilePage";
import EmployeeMainPage from "./pages/employee/employee-main-page/EmployeeMainPage";
import NotFound from "./components/404NotFound/NotFound";

const USER_TYPES = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  EMPLOYEE: "EMPLOYEE",
};
const CURRENT_USER_TYPE = sessionStorage.getItem("role");
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicElement>
            <LoginPage />
          </PublicElement>
        }
      />
      <Route path="/admin" element={<AdminElement><AdminPage /></AdminElement>} />
      <Route path="/createadmin" element={<AdminElement><CreateAdminPage /></AdminElement>} />
      <Route path="/adminlistpage" element={<AdminElement><AdminListPage /></AdminElement>} />
      <Route path="/managerlistpage" element={<AdminElement><ManagerListPage /></AdminElement>} />
      <Route
        path="/companymanagercreatepage"
        element={<AdminElement><CompanyManagerCreatePage /></AdminElement>}
      />
      <Route path="/adminprofilpage" element={<AdminElement><AdminProfilPage /></AdminElement>} />

      <Route
        path="/companymanagerlisttablepage"
        element={<AdminElement><CompanyManagerListTablePage /></AdminElement>}
      />
      <Route path="/employeelistpage" element={<AdminListPage />} />
      <Route path="/companyregisterpage" element={<CreateCompanyPage />} />
      <Route path="/manager" element={<ManagerElement><ManagerMainPage /></ManagerElement>} />
      <Route
        path="/managerlistmanagerpage"
        element={<ManagerListManagerPage />}
      />
      <Route path="/employeeregister" element={<EmployeeRegister />} />
      <Route path="/managermyprofilepage" element={<ManagerMyProfilePage />} />
      <Route path="/managerupdatepage" element={<ManagerUpdateProfilePage />} />
      <Route path="/employeemain" element={<EmployeeMainPage />} />
      
      
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/loginpage" element={<LoginPage />} />

      {/* routelar düzelmesi lazım  */}

      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};
function PublicElement({children}){
  return <>
  {children}
  </>
}

function AdminElement({children}){
  if(CURRENT_USER_TYPE === USER_TYPES.ADMIN){
    return <>
    {children}
    </>;
  }else{
    window.location.replace("http://localhost:3000/notfound")

  }

}
function ManagerElement({children}){
  if(CURRENT_USER_TYPE === USER_TYPES.MANAGER){
    return <>
    {children}
    </>;
  }else{
    window.location.replace("http://localhost:3000/notfound")

  }
}
function EmployeeElement({children}){
  if(CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE){
    return <>
    {children}
    </>;
  }else{
    window.location.replace("http://localhost:3000/notfound")

  }
}
export default App;
