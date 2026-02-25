import "./styles.css";
import logo from "../../assets/logo.svg";
import { useMenuContext } from "../../context/MenuContext";
import { useNavigate } from "react-router-dom";

const navItems = [
  { id: 1, label: "HOME", hasArrow: false, route: "/" },
  { id: 2, label: "OFFICES", hasArrow: true, route: "/offices" },
  { id: 3, label: "IT", hasArrow: true, route: "/it" },
  { id: 4, label: "PEOPLE TEAM", hasArrow: true, route: "/people-team" },
  { id: 5, label: "PROJECTS", hasArrow: true, route: "/projects" },
];

const Header = () => {
  const { activeMenu, setActiveMenu } = useMenuContext();
  const navigate = useNavigate();
  return (
    <header className="header-bar max-width-screen">
      <div className="header-left">
        <div className="brand-text">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand-sub">CONNECT</span>
        </div>
      </div>

      <nav className="header-nav" aria-label="Primary">
        {navItems.map(({ id, label, hasArrow, route }) => (
          <span
            key={label}
            className={`header-nav-item  ${activeMenu.id === id ? "active" : ""}`}
            onClick={() => {
              setActiveMenu({ id, label });
              navigate(route);
            }}
          >
            {label}
            {hasArrow && <i className="fa-solid fa-chevron-down"></i>}
          </span>
        ))}
      </nav>

      <div className="header-right">
        <button type="button" className="bell-btn" aria-label="Notifications">
          <i className="fa-regular fa-bell fa-lg"></i>
          <span className="bell-dot" />
        </button>
        <button type="button" className="avatar-btn" aria-label="Profile">
          CF
        </button>
      </div>
    </header>
  );
};
export default Header;
