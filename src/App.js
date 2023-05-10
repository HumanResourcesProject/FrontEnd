import React from 'react'
import AdminPage from './pages/admin-page/AdminPage'
import { Routes, Route, Navigate} from "react-router-dom"
import CreateAdminPage from './pages/create-admin-page/CreateAdminPage'
import AdminListPage from './pages/admin-list-page/AdminListPage'
import AdminProfilPage from './pages/admin-profil-page/AdminProfilPage'
import CompanyManagerCreatePage from './pages/company-manager-create-page/CompanyManagerCreatePage'
import CompanyManagerListTablePage from './pages/company-manager-list-table-page/CompanyManagerListTablePage'
const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<AdminPage/>}/>
      <Route path ="/createadmin" element={<CreateAdminPage/>}/>
      <Route path ="/adminlistpage" element={<AdminListPage/>}/>
      <Route path ="/managerlistpage" element={<AdminListPage/>}/>
      <Route path ="/companymanagercreatepage" element={<CompanyManagerCreatePage/>}/>
      <Route path ="/companymanagerlisttablepage" element={<CompanyManagerListTablePage/>}/>
      <Route path ="/workerlistpage" element={<AdminListPage/>}/>
      <Route path ="/adminprofilpage" element={<AdminProfilPage/>}/>
      {/* routelar düzelmesi lazım  */}
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    
  )
}

export default App