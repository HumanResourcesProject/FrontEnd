import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminPage from "./pages/admin/admin-main-page/AdminPage";
import CreateAdminPage from "./pages/admin/admin-create-page/CreateAdminPage";
import AdminListPage from "./pages/admin/admin-list-page/AdminListPage";
import AdminProfilPage from "./pages/admin/admin-profil-page/AdminProfilPage";
import CreateCompanyPage from "./pages/admin/create-company-page/CreateCompanyPage";
import CompanyManagerCreatePage from "./pages/admin/manager-create-page/CompanyManagerCreatePage";
import ManagerListPage from "./pages/admin/manager-list-page/ManagerListPage";

import ManagerMainPage from "./pages/manager/manager-main-page/ManagerMainPage";
import EmployeeRegister from "./pages/manager/employee-register-page/EmployeeRegister";
import ManagerMyProfilePage from "./pages/manager/manager-my-profile-page/ManagerMyProfilePage";
import ManagerUpdateProfilePage from "./pages/manager/manager-update-page/ManagerUpdateProfilePage";
import { LoginPage } from "./pages/login-page/LoginPage";

import EmployeeMainPage from "./pages/employee/employee-main-page/EmployeeMainPage";
import EmployeeAddLeave from "./pages/employee/employee-add-leave-page/EmployeeAddLeave";
import EmployeeLeavePage from "./pages/employee/employee-leave-page/EmployeeLeavePage";
import WorkerListPage from "./pages/employee/employee-list-page/WorkerListPage";
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
      {/* Admin Part */}

      <Route
        path="/"
        element={
          <PublicElement>
            <LoginPage />
          </PublicElement>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminElement>
            <AdminPage />
          </AdminElement>
        }
      />
      <Route
        path="/createadmin"
        element={
          <AdminElement>
            <CreateAdminPage />
          </AdminElement>
        }
      />
      <Route
        path="/adminlistpage"
        element={
          <AdminElement>
            <AdminListPage />
          </AdminElement>
        }
      />
      <Route
        path="/managerlistpage"
        element={
          <AdminElement>
            <ManagerListPage />
          </AdminElement>
        }
      />
      <Route
        path="/companymanagercreatepage"
        element={
          <AdminElement>
            <CompanyManagerCreatePage />
          </AdminElement>
        }
      />
      <Route
        path="/adminprofilpage"
        element={
          <AdminElement>
            <AdminProfilPage />
          </AdminElement>
        }
      />
      <Route
        path="/companyregisterpage"
        element={
          <AdminElement>
            <CreateCompanyPage />
          </AdminElement>
        }
      />
      {/* Manager Part */}
      <Route
        path="/employeelistpage"
        element={
          <ManagerElement>
            <AdminListPage />
          </ManagerElement>
        }
      />
      <Route
        path="/manager"
        element={
          <ManagerElement>
            <ManagerMainPage />
          </ManagerElement>
        }
      />

      <Route
        path="/employeeregister"
        element={
          <ManagerElement>
            <EmployeeRegister />
          </ManagerElement>
        }
      />
      <Route
        path="/managermyprofilepage"
        element={
          <ManagerElement>
            <ManagerMyProfilePage />
          </ManagerElement>
        }
      />
      <Route
        path="/managerupdatepage"
        element={
          <ManagerElement>
            <ManagerUpdateProfilePage />
          </ManagerElement>
        }
      />

      {/* Employee Part */}
      <Route
        path="/employeemain"
        element={
          <EmployeeElement>
            <EmployeeMainPage />
          </EmployeeElement>
        }
      />
      <Route
        path="/employeeaddleave"
        element={
          <EmployeeElement>
            <EmployeeAddLeave />
          </EmployeeElement>
        }
      />
      <Route
        path="/employeeleavepage"
        element={
          <EmployeeElement>
            <EmployeeLeavePage />
          </EmployeeElement>
        }
      />
      <Route
        path="/employeeworkerlist"
        element={
          <EmployeeElement>
            <WorkerListPage />
          </EmployeeElement>
        }
      />

      <Route path="/notfound" element={<NotFound />} />
      <Route path="/loginpage" element={<LoginPage />} />

      {/* routelar düzelmesi lazım  */}

      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
};
function PublicElement({ children }) {
  return <>{children}</>;
}

function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN) {
    return <>{children}</>;
  } else {
    window.location.replace("http://localhost:3000/notfound");
  }
}
function ManagerElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.MANAGER) {
    return <>{children}</>;
  } else {
    window.location.replace("http://localhost:3000/notfound");
  }
}
function EmployeeElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE) {
    return <>{children}</>;
  } else {
    window.location.replace("http://localhost:3000/notfound");
  }
}
export default App;
