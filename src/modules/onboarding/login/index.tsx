import "./styles.css";
import microsoftLogo from "../../../assets/image/microsoftLogo.png";
import Label from "../../../components/label";
import InputBox from "../../../components/input-box";
import { useNavigate } from "react-router-dom";
import OnboardingContainer from "../common";
import { ErrorMessage, Formik } from "formik";

export default function Login() {
  const navigate = useNavigate();
  return (
    <OnboardingContainer headerTitle="Login to your account" seperatorTitle="User Authentication">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          navigate("/", { replace: true, preventScrollReset: true, viewTransition: true });
        }}
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Label title="Email" padding="28px 0px 0px" className="gap-1">
              <InputBox
                inputPlaceholder=""
                type="email"
                name="email"
                width={"clamp(343px, 50vw, 416px)"}
                onInputChange={handleChange}
                inputValue={values.email}
              />
            </Label>
            <ErrorMessage name="email" component="div" className="error-message" />
            <Label
              title="Password"
              padding="26px 0px 20px"
              renderRight={() => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/forget-password", {
                        viewTransition: true,
                      });
                    }}
                  >
                    <span className="lg-forgot-btn">Forgot?</span>
                  </button>
                );
              }}
              className="gap-1"
            >
              <InputBox
                inputPlaceholder=""
                type="password"
                name="password"
                width={"clamp(343px, 50vw, 416px)"}
                onInputChange={handleChange}
                inputValue={values.password}
              />
            </Label>
            <ErrorMessage name="password" component="div" className="error-message" />
            <button type="submit" className="ob-primary-btn" disabled={isSubmitting}>
              {"Log In"}
            </button>
          </form>
        )}
      </Formik>
      <button type="button" className="login-sso-btn">
        <img src={microsoftLogo} alt="login-icon" />
        <p className="login-sso-btn-text">{"Sign in with Microsoft"}</p>
      </button>
    </OnboardingContainer>
  );
}
