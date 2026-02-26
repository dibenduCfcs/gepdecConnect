import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./modules/login/Login";
import Module from "./modules";
import { MenuContextProvider } from "./context/MenuContext";
import Breadcrmb from "./components/breadcrmb/Breadcrmb";
import OfficeList from "./modules/offices/office-list";
import Home from "./modules/Home";
import ITAnnouncements from "./modules/it";

function App() {
  return (
    <MenuContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Module />}>
            <Route path="/" element={<Home />} />
            <Route path="/offices" element={<OfficeList />} />
            <Route
              path="/it"
              element={
                <ITAnnouncements/>
              }
            />
            <Route
              path="/people-team"
              element={
                <div>
                  <Breadcrmb
                    items={[
                      { label: "People Team", path: "/people-team" },
                      { label: "Developers", path: "/" },
                      { label: "Ajay singh" },
                    ]}
                  />
                  oijhasasjjklJKLFJKLASDGLJK
                </div>
              }
            />
            <Route
              path="/projects"
              element={<div>oijhasasjjklJKLFJKLASDGLJK</div>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuContextProvider>
  );
}

export default App;
