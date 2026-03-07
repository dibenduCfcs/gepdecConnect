import { Formik } from "formik";
import Seperator from "../../../components/seperator";
import "./styles.css";
import Label from "../../../components/label";
import InputBox from "../../../components/input-box";
import userIcon from "../../../assets/image/userIcon.png";
import emailIcon from "../../../assets/image/Vector.png";
import phoneIcon from "../../../assets/image/Phone.png";
import linkIcon from "../../../assets/image/Link.png";
import users from "../../../assets/image/Users.png";
import close from "../../../assets/image/close.png";
import messageSquare from "../../../assets/image/MessageSquare.png";
import DropdownBox from "../../../components/dropdown-box";
import { useWindowDimension } from "../../../hook";
import { useState } from "react";
import CheckBox from "../../../components/check-box";
import colors from "../../../static/colors";

interface Props {
  onClose?: () => void;
}
const RefferalForm: React.FC<Props> = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  useWindowDimension(() => {
    setIsMobile(window.innerWidth <= 575);
  });
  const renderSection = (title: string, className?: string) => {
    return (
      <>
        <p className={`rf-form-ttle ${className}`}>{title}</p>
        <Seperator />
      </>
    );
  };
  return (
    <div className="max-mobile-width-screen rf-container" onClick={(e) => e.stopPropagation()}>
      <div className="jd-form-header">
        <div className="custom-row justify-content-between align-items-center">
          <p className="jd-form-ttle">{"Refer a Candidate"}</p>
          <button className="jd-form-close" onClick={props.onClose}>
            <img src={close} alt="" />
          </button>
        </div>
        <p className="jd-form-desc">
          {"Site Incharge"}
          <span>{" • Engineering • Noida, UP, India"}</span>
        </p>
      </div>
      <div className="refferal-form" style={{ marginTop: "0px" }}>
        {renderSection("Candidate Information")}
        <Formik
          initialValues={{ fullName: "", email: "", password: "" }}
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
          }}
        >
          {({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="rf-form">
              <Label title="Full Name" isRequired className="rf-form-fname" padding={"0"}>
                <InputBox
                  icon={userIcon}
                  inputPlaceholder="e.g. Rahul Sharma"
                  type="text"
                  inputValue={values.fullName}
                  className="rf-form-inp"
                />
              </Label>
              <div
                className={`custom-row justify-content-center align-items-center ${isMobile ? "flex-wrap" : "gap-3 flex-nowrap"}`}
              >
                <Label title="Email Address" isRequired className="rf-form-fname" padding={"0"}>
                  <InputBox
                    icon={emailIcon}
                    inputPlaceholder="email@example.com"
                    type="email"
                    className="rf-form-inp"
                  />
                </Label>
                <Label title="Mobile Number" isRequired className="rf-form-fname" padding={"0"}>
                  <InputBox
                    icon={phoneIcon}
                    inputPlaceholder="+91 98765 43210"
                    type="number"
                    className="rf-form-inp"
                  />
                </Label>
              </div>
              <Label
                title="LinkedIn Profile URL(Optional)"
                isRequired
                className="rf-form-fname"
                padding={"0"}
              >
                <InputBox
                  icon={linkIcon}
                  inputPlaceholder="https://linkedin.com/in/username"
                  type="text"
                  className="rf-form-inp"
                />
              </Label>
              {renderSection("Referral Details", "mt-3")}
              <Label
                title="Your Relationship with the Candidate"
                isRequired
                className="rf-form-fname"
                padding={"0"}
              >
                <DropdownBox
                  className="rf-form-inp"
                  icon={users}
                  options={[{ id: 1, value: "fasfh" }]}
                  onChange={() => console.log()}
                  showUnselectOption
                  onUnselect={() => console.log("Selection cleared")}
                />
              </Label>
              <Label title="Message?" isRequired className="rf-form-fname" padding={"0"}>
                <InputBox
                  icon={messageSquare}
                  inputPlaceholder="https://linkedin.com/in/username"
                  type="text"
                  className="rf-form-inp"
                  multiline
                />
              </Label>
              {renderSection("Confirmation", "mt-3")}
              <CheckBox
                data={[
                  {
                    id: 1,
                    value:
                      "I confirm that I have informed the candidate about this referral and obtained their consent.",
                  },
                ]}
                onChange={(item) => console.log(item)}
                color={colors.textSecondary}
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="jd-form-footer">
        <button className="jd-form-btn cancel" onClick={props.onClose}>
          {"Cancel"}
        </button>
        <button className="jd-form-btn">{"Submit Refferal"}</button>
      </div>
    </div>
  );
};

export default RefferalForm;
