import { useLocation } from "react-router-dom";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import TitleContainer from "../../../components/title-con";
import DownloadIcon from "../../../assets/custom-svg/download";
import PrintIcon from "../../../assets/custom-svg/print";
import colors from "../../../static/colors";
import { Badge } from "../../../components/badge";
import TagIcon from "../../../assets/custom-svg/tag";
import Container from "../../../components/container";
import "./styles.css";
import { useState } from "react";

const PolicyDescription = () => {
  const [tab, setTab] = useState(0);
  const location = useLocation();

  const renderTopButton = () => {
    return (
      <div className="d-flex gap-2 top-btn-con">
        <button className="base-outline-button top-out-btn badge-con badge-border">
          <PrintIcon color={colors.background} />
          <p className="badge-text">Print</p>
        </button>
        <button className="base-button top-btn badge-con badge-border">
          <DownloadIcon color={colors.background} />
          <p className="badge-text">Download PDF</p>
        </button>
      </div>
    );
  };
  return (
    <div className="policy-description max-width-screen">
      <div className="emp-tit-con">
        <Breadcrmb
          items={[
            { label: "Home", path: "/" },
            { label: "People Team", path: "/people-team" },
            { label: "Company Policy", path: "/people-team/company-policy" },
            { label: location.state?.title ?? "" },
          ]}
        />
        <TitleContainer titleLast="Employee Code of Conduct">{renderTopButton()}</TitleContainer>
        <Container gap={"8px"}>
          <Badge
            label={"props.category"}
            showIcon
            icon={TagIcon}
            color={colors.background}
            backgroundColor={colors.badgeColor}
            borderColor={colors.borderColor}
          />
          <Badge
            label={"props.category"}
            showIcon
            icon={TagIcon}
            color={colors.background}
            backgroundColor={colors.badgeColor}
            borderColor={colors.borderColor}
          />
          <Badge
            label={"props.category"}
            showIcon
            icon={TagIcon}
            color={colors.background}
            backgroundColor={colors.badgeColor}
            borderColor={colors.borderColor}
          />
        </Container>
        <Container>
          <div className="btn-group me-2" role="group">
            <button
              className={`pd-btn ${tab === 0 ? "active" : ""}`}
              onClick={() => {
                setTab(0);
              }}
            >
              {"Overview"}
            </button>
            <button
              className={`pd-btn ${tab === 1 ? "active" : ""}`}
              onClick={() => {
                setTab(1);
              }}
            >
              {"Full Policy"}
            </button>
            <button
              className={`pd-btn ${tab === 2 ? "active" : ""}`}
              onClick={() => {
                setTab(2);
              }}
            >
              {"Revision History"}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PolicyDescription;
