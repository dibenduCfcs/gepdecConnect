import "./styles.css";
import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../static/data";

const NavBarItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="header-nav">
      {navItems.map(({ label, hasArrow, route }) => (
        <span
          key={label}
          className={`header-nav-item ${
            route === "/"
              ? location.pathname === "/"
                ? "active"
                : ""
              : location.pathname.startsWith(route)
                ? "active"
                : ""
          }`}
          onClick={() => {
            navigate(route);
          }}
        >
          {label}
          {hasArrow && <i className="fa-solid fa-chevron-down"></i>}
        </span>
      ))}
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header-bar">
      <div className="header-bar-child max-width-screen">
        <div className="header-left">
          <div className="brand-text">
            <img src={logo} alt="logo" className="logo" />
            <span className="brand-sub">CONNECT</span>
          </div>
        </div>
        <NavBarItem />
        <div className="header-right">
          <button type="button" className="bell-btn" aria-label="Notifications">
            <i className="fa-regular fa-bell fa-lg"></i>
            <span className="bell-dot" />
          </button>
          <button type="button" className="avatar-btn" aria-label="Profile">
            CF
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
