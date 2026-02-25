import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./styles.css";

const Module = () => {
  return (
    <div className="main-cntnr">
      <Header />
      <div className="otlt-cntnr">
        <Outlet />
      </div>
    </div>
  );
};

export default Module;
