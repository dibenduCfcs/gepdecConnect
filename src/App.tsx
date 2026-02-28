import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./modules/login/Login";
import Module from "./modules";
import { MenuContextProvider } from "./context/MenuContext";
import OfficeList from "./modules/offices/office-list";
import Home from "./modules/home";
import ITAnnouncements from "./modules/it";
import CompanyPolicy from "./modules/people-team/company-policy";
import EmployeeHandbook from "./modules/people-team/employee-handbook";
import ProjectAnnoucement from "./modules/project/project-annoucement";

function App() {
  return (
    <MenuContextProvider>
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
              <Route index element={<Navigate to="project-annoucement" replace />} />
              <Route path="project-annoucement" element={<ProjectAnnoucement />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
