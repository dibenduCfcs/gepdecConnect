import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Module from "./modules";
import OfficeList from "./modules/offices/office-list";
import Home from "./modules/home";
import ITAnnouncements from "./modules/it";
import CompanyPolicy from "./modules/people-team/company-policy";
import EmployeeHandbook from "./modules/people-team/employee-handbook";
import ProjectAnnoucement from "./modules/project/project-annoucement";
import GuestHouses from "./modules/project/guest-houses";
import Project from "./modules/project/projects";
import Login from "./modules/onboarding/login";
import ForgetPassword from "./modules/onboarding/forgot-password";
import "./App.css";
import PolicyDescription from "./modules/people-team/policy-description";
import InternalJobRefferal from "./modules/people-team/internal-job-refferal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/" element={<Module />}>
          <Route path="/" element={<Home />} />
          <Route path="/offices" element={<OfficeList />} />
          <Route path="/it" element={<ITAnnouncements />} />
          <Route path="people-team">
            <Route index element={<Navigate to="company-policy" replace />} />
            <Route path="company-policy" element={<CompanyPolicy />} />
            <Route path="company-policy/policy-description" element={<PolicyDescription />} />
            <Route path="employee-handbook" element={<EmployeeHandbook />} />
            <Route path="internal-job-refferal" element={<InternalJobRefferal />} />
          </Route>
          <Route path="projects">
            <Route index element={<Project />} />
            <Route path="project-annoucement" element={<ProjectAnnoucement />} />
            <Route path="guest-houses" element={<GuestHouses />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
