import Seperator from "../../../components/seperator";
import loginIcon from "../../../assets/image/loginIcon.png";
import logo from "../../../assets/logo.svg";
import "./styles.css";

interface Props {
  headerTitle?: string;
  seperatorTitle?: string;
  children?: React.ReactNode;
}
const OnboardingContainer: React.FC<Props> = ({
  headerTitle = "",
  seperatorTitle = "",
  children,
}) => {
  return (
    <div className="ob-container">
      <div className="ob-design-con">
        <img src={loginIcon} alt="login-icon" />
      </div>
      <div className="ob-form-con">
        <div className="brand-text">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand-sub">CONNECT</span>
        </div>
        <h3 className="ob-header">{headerTitle}</h3>
        <Seperator name={seperatorTitle} nameClassName="ob-seperator-name" />
        {children}
      </div>
    </div>
  );
};

export default OnboardingContainer;
