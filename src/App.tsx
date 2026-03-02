import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./modules/login/Login";
import Module from "./modules";
import OfficeList from "./modules/offices/office-list";
import Home from "./modules/home";
import ITAnnouncements from "./modules/it";
import CompanyPolicy from "./modules/people-team/company-policy";
import EmployeeHandbook from "./modules/people-team/employee-handbook";
import ProjectAnnoucement from "./modules/project/project-annoucement";
import GuestHouses from "./modules/project/guest-houses";
import Project from "./modules/project/projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Module />}>
            <Route path="/" element={<Home />} />
            <Route path="/offices" element={<OfficeList />} />
            <Route path="/it" element={<ITAnnouncements />} />
            <Route path="people-team">
              <Route index element={<Navigate to="company-policy" replace />} />
              <Route path="company-policy" element={<CompanyPolicy />} />
              <Route path="employee-handbook" element={<EmployeeHandbook />} />
            </Route>
            <Route path="projects">
              <Route index element={<Project />} />
              <Route path="project-annoucement" element={<ProjectAnnoucement />} />
              <Route path="guest-houses" element={<GuestHouses />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
