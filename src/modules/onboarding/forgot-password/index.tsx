import "./styles.css";
import "../common/styles.css";
import Label from "../../../components/label";
import InputBox from "../../../components/input-box";
import { useNavigate } from "react-router-dom";
import OnboardingContainer from "../common";
import { useState } from "react";

export default function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const navigate = useNavigate();
  const renderForgetPassword = () => {
    const handleSubmit = () => {
      if (email !== "") {
        setStep(2);
      }
    };
    return (
      <>
        <Label title="Email" padding="28px 0px 20px">
          <InputBox
            inputPlaceholder=""
            type="email"
            width={"clamp(343px, 50vw, 416px)"}
            inputValue={email}
            onInputChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <button type="button" className="ob-primary-btn" onClick={handleSubmit}>
          {"Sent OTP"}
        </button>

        <button
          type="button"
          className="ob-back-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          {"Back"}
        </button>
      </>
    );
  };

  const renderOTPVerfication = () => {
    const handleSubmit = () => {
      if (otp !== "" && otp.length === 6) {
        setStep(3);
      }
    };
    return (
      <>
        <Label title="Enter OTP" padding="28px 0px 20px">
          <InputBox
            inputPlaceholder=""
            type="number"
            width={"clamp(343px, 50vw, 416px)"}
            inputValue={otp}
            onInputChange={(e) => setOTP(e.target.value)}
          />
        </Label>
        <button type="button" className="ob-primary-btn" onClick={handleSubmit}>
          {"Verify"}
        </button>

        <button
          type="button"
          className="ob-back-btn"
          onClick={() => {
            setStep(1);
          }}
        >
          {"Back"}
        </button>
      </>
    );
  };

  const renderResetPassword = () => {
    const handleSubmit = () => {
      if (newPassword !== "" && cnfPassword !== "" && newPassword === cnfPassword) {
        navigate("/login", { replace: true, preventScrollReset: true, viewTransition: true });
      }
    };
    return (
      <>
        <Label title="New password" padding="28px 0px 0px">
          <InputBox
            inputPlaceholder=""
            name="newPassword"
            type="password"
            width={"clamp(343px, 50vw, 416px)"}
            inputValue={newPassword}
            onInputChange={(e) => setNewPassword(e.target.value)}
          />
        </Label>
        <Label title="Confirm new password" padding="26px 0px 20px">
          <InputBox
            inputPlaceholder=""
            name="cnfPassword"
            type="password"
            width={"clamp(343px, 50vw, 416px)"}
            inputValue={cnfPassword}
            onInputChange={(e) => setCnfPassword(e.target.value)}
          />
        </Label>
        <button type="button" className="ob-primary-btn" onClick={handleSubmit}>
          {"Submit"}
        </button>

        <button
          type="button"
          className="ob-back-btn"
          onClick={() => {
            setStep(2);
          }}
        >
          {"Back"}
        </button>
      </>
    );
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return renderForgetPassword();
      case 2:
        return renderOTPVerfication();
      case 3:
        return renderResetPassword();
      default:
        return renderForgetPassword();
    }
  };

  return (
    <OnboardingContainer
      headerTitle="Forgot password?"
      seperatorTitle="Please enter the email associated with your account"
    >
      {renderContent()}
    </OnboardingContainer>
  );
}
