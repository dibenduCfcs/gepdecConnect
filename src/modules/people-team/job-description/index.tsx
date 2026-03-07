import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import "./styles.css";
import { Badge, BadgeDot } from "../../../components/badge";
import DateCon from "../../../components/date-con";
import colors from "../../../static/colors";
import Seperator from "../../../components/seperator";
import checkcircle from "../../../assets/image/CheckCircle.png";
import userCheck from "../../../assets/image/UserCheck.png";

import Overlay from "../../../components/overlay";
import RefferalForm from "../refferal-form";
const JobDescription = () => {
  const target = useRef(null);
  const [formModal, setFormModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { title } = location.state;

  const skills = [
    { skillId: 1, skillName: "Site Supervision" },
    { skillId: 2, skillName: "Construction Management" },
    { skillId: 3, skillName: "Quality Control" },
    { skillId: 4, skillName: "EHS Compliance" },
    { skillId: 5, skillName: "AutoCAD" },
    { skillId: 6, skillName: "Labour Management" },
  ];

  const responsibilities = [
    {
      responsibilityId: 1,
      responsibilityName: "Supervise all on-site construction activities and labour workforce.",
    },
    {
      responsibilityId: 1,
      responsibilityName:
        "Coordinate material procurement, delivery schedules, and site logistics.",
    },
    {
      responsibilityId: 1,
      responsibilityName: "Ensure strict adherence to construction drawings and specifications.",
    },
    {
      responsibilityId: 1,
      responsibilityName: "Conduct daily site inspections and quality checks.",
    },
    {
      responsibilityId: 1,
      responsibilityName: "Implement and enforce EHS policies and safety protocols on site.",
    },
    {
      responsibilityId: 1,
      responsibilityName: "Maintain site diary, progress records, and daily reports.",
    },
  ];
  const qualifications = [
    {
      qualificationsId: 1,
      qualificationsName: "Supervise all on-site construction activities and labour workforce.",
    },
    {
      qualificationsId: 1,
      qualificationsName:
        "Coordinate material procurement, delivery schedules, and site logistics.",
    },
    {
      qualificationsId: 1,
      qualificationsName: "Ensure strict adherence to construction drawings and specifications.",
    },
    {
      responsibilityId: 1,
      qualificationsName: "Conduct daily site inspections and quality checks.",
    },
    {
      qualificationsId: 1,
      qualificationsName: "Implement and enforce EHS policies and safety protocols on site.",
    },
    {
      qualificationsId: 1,
      qualificationsName: "Maintain site diary, progress records, and daily reports.",
    },
  ];
  const renderJobTitle = () => {
    return (
      <div className="jd-job-ttle-con">
        <div className="jd-job-ttle-left-con">
          <div className="jd-icon-con">
            <i className="fa fa-code" aria-hidden="true"></i>
          </div>
          <div className="jd-job-ttle">
            <p>{"Site Incharge"}</p>
            <div className="custom-row justify-content-center align-items-center gap-2">
              <Badge
                label="Engineering"
                backgroundColor={colors.badgeColor}
                color={colors.textSecondary}
                borderColor={colors.borderColor}
                isRounded={false}
              />
              <BadgeDot dotColor={colors.badgeColor} />
              <DateCon date="Posted 2 Mar 2026" />
            </div>
          </div>
        </div>
        <button
          className="jd-apply-btn"
          ref={target}
          onClick={() => {
            // if (!isMobile) {
            //   setFormModal(!formModal);
            // } else {
            //   navigate("/people-team/internal-job-refferal/refferal-form");
            // }
            setFormModal(!formModal);
          }}
          color={"red"}
        >
          {"Refer Now"}
        </button>
      </div>
    );
  };

  const renderKeyValue = () => {
    return (
      <div className="custom-row justify-content-start align-items-center flex-wrap gap-2 w-100">
        <Badge
          label="Noida, UP, India"
          backgroundColor={colors.badgeColor}
          color={colors.background}
          borderColor={colors.borderColor}
          isRounded={false}
          padding={"6px 12px"}
        />
        <Badge
          label="5–10 Years Experience"
          backgroundColor={colors.badgeColor}
          color={colors.background}
          borderColor={colors.borderColor}
          isRounded={false}
          padding={"6px 12px"}
        />
        <Badge
          label="B.Tech / Diploma (Civil)"
          backgroundColor={colors.badgeColor}
          color={colors.background}
          borderColor={colors.borderColor}
          isRounded={false}
          padding={"6px 12px"}
        />
        <Badge
          label="Full-Time"
          backgroundColor={colors.badgeColor}
          color={colors.background}
          borderColor={colors.borderColor}
          isRounded={false}
          padding={"6px 12px"}
        />
      </div>
    );
  };

  const renderAboutRole = () => {
    return (
      <div className="jd-about-role-con">
        <p className="jd-about-role-ttle">{"About the Role"}</p>
        <Seperator />
        <p className="jd-about-role-desc">
          {
            "We are hiring a Site Incharge to oversee day-to-day construction activities at project sites. The incumbent will supervise labour, coordinate materials, enforce safety standards, and ensure quality construction as per approved drawings and specifications."
          }
        </p>
      </div>
    );
  };
  const renderSkillCompetencies = () => {
    return (
      <div className="jd-skill-comp-con">
        <p className="jd-skill-comp-ttle">{"Skills & Competencies"}</p>
        <Seperator />
        <div className="custom-row justify-content-start align-items-center flex-wrap gap-2 w-100 mt-3">
          {skills.map((skill) => {
            return (
              <Badge
                label={skill.skillName}
                backgroundColor={colors.badgeColor}
                color={colors.background}
                borderColor={colors.borderColor}
                isRounded={false}
                padding={"6px 12px"}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const renderResponsibilities = () => {
    return (
      <div className="jd-responsibilities-con">
        <p className="jd-responsibilities-ttle">{"Key Responsibilities"}</p>
        <Seperator />
        <div className="custom-column justify-content-center align-items-start flex-wrap gap-2 w-100 mt-3">
          {responsibilities.map((responsibility) => {
            return (
              <Badge
                showIcon
                icon={checkcircle}
                label={responsibility.responsibilityName}
                color={colors.textSecondary}
                padding={"6px 12px"}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const renderRequiredQualifications = () => {
    return (
      <div className="jd-req-qual-con">
        <p className="jd-req-qual-ttle">{"Required Qualifications"}</p>
        <Seperator />
        <div className="custom-column justify-content-center align-items-start flex-wrap gap-2 w-100 mt-3">
          {qualifications.map((qualification) => {
            return (
              <Badge
                showIcon
                icon={checkcircle}
                label={qualification.qualificationsName}
                color={colors.textSecondary}
                padding={"6px 12px"}
              />
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="max-width-screen">
      <Breadcrmb
        items={[
          { label: "Home", path: "/" },
          { label: "People Team", path: "/people-team" },
          { label: "Internal Job Refferal", path: "/people-team/internal-job-refferal" },
          { label: title },
        ]}
      />
      <div className="jd-top-btn-con container-component">
        <button
          className="jd-top-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          <span>&larr;</span>
          {"Back to Job Listings"}
        </button>
      </div>

      <div className="jd-main-con">
        {renderJobTitle()}
        {renderKeyValue()}
        <div className="custom-row gap-4 mt-4">
          <div className="right-container">
            {renderAboutRole()}
            {renderSkillCompetencies()}
            {renderResponsibilities()}
            {renderRequiredQualifications()}
          </div>
          <div className="jd-side-bar-con">
            <p className="jd-side-bar-ttle">{"Know a great candidate?"}</p>
            <p className="jd-side-bar-desc">
              {"Refer someone you know for this role. Successful hires earn referral rewards."}
            </p>
            <button className="jd-apply-btn">
              <img src={userCheck} alt="" />
              {"Refer Now"}
            </button>
          </div>
        </div>
      </div>

      <Overlay
        isOpen={formModal}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <RefferalForm onClose={() => setFormModal(!formModal)} />
      </Overlay>
    </div>
  );
};

export default JobDescription;
