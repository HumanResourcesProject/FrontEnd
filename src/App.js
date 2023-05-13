import React from 'react'
import AdminPage from './pages/admin-main-page/AdminPage'
import { Routes, Route, Navigate} from "react-router-dom"
import CreateAdminPage from './pages/admin-create-page/CreateAdminPage'
import AdminListPage from './pages/admin-list-page/AdminListPage'
import AdminProfilPage from './pages/admin-profil-page/AdminProfilPage'
import CreateCompanyPage from './pages/create-company-page/CreateCompanyPage'
import ManagerMainPage from './pages/manager-main-page/ManagerMainPage'
import { LoginPage } from './pages/login-page/LoginPage'

import CompanyManagerCreatePage from './pages/company-manager-create-page/CompanyManagerCreatePage'
import CompanyManagerListTablePage from './pages/company-manager-list-table-page/CompanyManagerListTablePage'
import ManagerListManagerPage from './pages/manager-list-manager-page/ManagerListManagerPage'
import ManagerListPage from './pages/manager-list-page/ManagerListPage'
import EmployeeRegister from './pages/employee-register-page/EmployeeRegister'
import ManagerMyProfilePage from './pages/manager-my-profile-page/ManagerMyProfilePage'
import ManagerUpdateProfilePage from './pages/manager-update-page/ManagerUpdateProfilePage'

const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<AdminPage/>}/>
      <Route path ="/createadmin" element={<CreateAdminPage/>}/>
      <Route path ="/adminlistpage" element={<AdminListPage/>}/>
      <Route path ="/managerlistpage" element={<ManagerListPage/>}/>
      <Route path ="/companymanagercreatepage" element={<CompanyManagerCreatePage/>}/>
      <Route path ="/companymanagerlisttablepage" element={<CompanyManagerListTablePage/>}/>
      <Route path ="/employeelistpage" element={<AdminListPage/>}/>
      <Route path ="/adminprofilpage" element={<AdminProfilPage/>}/>
      <Route path ="/loginpage" element={<LoginPage/>}/>
      <Route path ="/companyregisterpage" element={<CreateCompanyPage/>}/>
      <Route path ="/manager" element={<ManagerMainPage/>}/>
      <Route path ="/managerlistmanagerpage" element={<ManagerListManagerPage/>}/>
      <Route path ="/employeeregister" element={<EmployeeRegister/>}/>
      <Route path ="/managermyprofilepage" element={<ManagerMyProfilePage/>}/>
      <Route path ="/managerupdatepage" element={<ManagerUpdateProfilePage/>}/>


      {/* routelar düzelmesi lazım  */}
      
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    
  )
}

export default App