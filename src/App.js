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
import ManagerListManagerPage from "./pages/manager/manager-list-manager-page/ManagerListManagerPage";
import ListEmployeeLeavesPage from "./pages/manager/list-employee-leaves-page/ListEmployeeLeavesPage";
import ListEmployeeAdvancePaymentsPage from "./pages/manager/list-employee-advence-payments-page/ListEmployeeAdvancePaymentsPage";
import ListEmployeeExpensesPage from "./pages/manager/list-employee-expenses-page/ListEmployeeExpensesPage";
import ManagerRequestsPage from "./pages/manager/manager-requests-page/ManagerRequestsPage";


import EmployeeMainPage from "./pages/employee/employee-main-page/EmployeeMainPage";
import EmployeeAddLeave from "./pages/employee/employee-add-leave-page/EmployeeAddLeave";
import EmployeeListLeavePage from "./pages/employee/employee-list-leave-page/EmployeeListLeavePage";
import WorkerListPage from "./pages/employee/employee-list-page/WorkerListPage";
import EmployeeMyProfilePage from "./pages/employee/employee-my-profile-page/EmployeeMyProfilePage";
import EmployeeExpensePage from "./pages/employee/employee-expense-page/EmployeeExpensePage";
import EmployeeAdvancePayment from "./pages/employee/employee-advance-payment-page/EmployeeAdvancePayment";

import  LoginPage  from "./pages/login-page/LoginPage";
import NotFound from "./components/404NotFound/NotFound";
import ManagerListEmployeePage from "./pages/manager/manager-list-employee-page/ManagerListEmployeePage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";


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
        path="/forgotpassword"
        element={
          <PublicElement>
            <ForgotPasswordPage />
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
        path="/manager"
        element={
          <ManagerElement>
            <ManagerMainPage />
          </ManagerElement>
        }
      />
      <Route
        path="/employeelistpage"
        element={
          <ManagerElement>
            <ManagerListEmployeePage />
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
      <Route
        path="/listmanagers"
        element={
          <ManagerElement>
            <ManagerListManagerPage />
          </ManagerElement>
        }
      />
            <Route
        path="/listemployeeexpenses"
        element={
          <ManagerElement>
            <ListEmployeeExpensesPage />
          </ManagerElement>
        }
      />
            <Route
        path="/listemployeeleaves"
        element={
          <ManagerElement>
            <ListEmployeeLeavesPage />
          </ManagerElement>
        }
      />
            <Route
        path="/listemployeeadvancepayments"
        element={
          <ManagerElement>
            <ListEmployeeAdvancePaymentsPage />
          </ManagerElement>
        }
      />
            <Route
        path="/managerequests"
        element={
          <ManagerElement>
            <ManagerRequestsPage />
          </ManagerElement>
        }
      />


      {/* Employee Part */}
      <Route
        path="/employee"
        element={
          <EmployeeElement>
            <EmployeeMainPage />
          </EmployeeElement>
        }
      />
      <Route
        path="/employeemyprofile"
        element={
          <EmployeeElement>
            <EmployeeMyProfilePage />
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
        path="/employeelistleave"
        element={
          <EmployeeElement>
            <EmployeeListLeavePage />
          </EmployeeElement>
        }
      />
      <Route
        path="/listallemployees"
        element={
          <EmployeeElement>
            <WorkerListPage />
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
        path="/employeeadvancepayment"
        element={
          <EmployeeElement>
            <EmployeeAdvancePayment />
          </EmployeeElement>
        }
      />
      <Route
        path="/employeeexpense"
        element={
          <EmployeeElement>
            <EmployeeExpensePage />
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
