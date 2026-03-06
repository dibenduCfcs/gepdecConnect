import { useLocation } from "react-router-dom";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import TitleContainer from "../../../components/title-con";
import DownloadIcon from "../../../assets/custom-svg/download";
import PrintIcon from "../../../assets/custom-svg/print";
import colors from "../../../static/colors";
import { Badge } from "../../../components/badge";
import TagIcon from "../../../assets/custom-svg/tag";
import Container from "../../../components/container";
import tick from "../../../assets/image/tick.png";
import "./styles.css";
import { useState } from "react";
import { useIsMobileWindow } from "../../../hook";

const PolicyDescription = () => {
  const [tab, setTab] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobileWindow();
  const tableHeader = ["Version", "Date", "Author", "Changes"];
  const revisionHistory = [
    {
      version: "v1.0",
      date: "01/01/2023",
      author: "John Doe",
      changes: "Initial version",
    },
    {
      version: "v1.1",
      date: "01/01/2023",
      author: "John Doe",
      changes: "Initial version",
    },
  ];

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
  const renderAcknowledgement = () => {
    return (
      <div className="custom-row justify-content-between align-items-center w-100 acc-con">
        <div className="custom-col acc-left-con">
          <p className="ac-ttle">Acknowledgment Required</p>
          <p className="acc-desc">
            This policy requires your acknowledgment. Please read the full policy and confirm.
          </p>
        </div>
        <button type="button" className="acc-btn">
          <img src={tick} alt="" />
          <p>Acknowledge Policy</p>
        </button>
      </div>
    );
  };

  const renderRevisionHistory = () => {
    return (
      <div className="pd-rev-con">
        <p className="pd-rev-ttle">Revision History</p>
        <p className="pd-rev-desc">
          The table below records all revisions made to this policy document, including the version
          number, date of change, author, and a summary of what was updated.
        </p>
        <table>
          <thead>
            <tr>
              {tableHeader.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {revisionHistory.map((item, index) => (
              <tr key={index}>
                <td data-label={tableHeader[0]}>
                  <div className="custom-row gap-1">
                    <Badge
                      label={item.version}
                      backgroundColor={index === 0 ? colors.background : colors.F0F2F5}
                      color={index === 0 ? colors.white : colors.textSecondary}
                      isRounded={false}
                    />
                    {index === 0 && (
                      <Badge
                        label={"Current"}
                        backgroundColor={colors.F0F2F5}
                        color={colors.background}
                      />
                    )}
                  </div>
                </td>
                <td data-label={tableHeader[1]}>{item.date}</td>
                <td data-label={tableHeader[2]}>{item.author}</td>
                <td data-label={tableHeader[3]}>{item.changes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <div className="policy-description">
      <div className="pd-tit-con">
        <div className="max-width-screen">
          <Breadcrmb
            items={[
              { label: "Home", path: "/" },
              { label: "People Team", path: "/people-team" },
              { label: "Company Policy", path: "/people-team/company-policy" },
              { label: location.state?.title ?? "" },
            ]}
          />
          <TitleContainer
            titleLast="Employee Code of Conduct"
            className="pd-ttle-con"
            showChildrenMobile
          >
            {renderTopButton()}
          </TitleContainer>
          <Container gap={"8px"} marginBottom={isMobile ? "16px" : "49px"}>
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
          <Container marginBottom={"0px"}>
            <div className="btn-group me-2" role="group">
              <button
                className={`pd-btn ${tab === 0 ? "active" : "in-active"}`}
                onClick={() => {
                  setTab(0);
                }}
              >
                {"Overview"}
              </button>
              <button
                className={`pd-btn ${tab === 1 ? "active" : "in-active"}`}
                onClick={() => {
                  setTab(1);
                }}
              >
                {"Full Policy"}
              </button>
              <button
                className={`pd-btn ${tab === 2 ? "active" : "in-active"}`}
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

      <div className="pd-main-con">
        <div className="html-render"></div>
        {tab !== 2 ? renderAcknowledgement() : renderRevisionHistory()}
      </div>
    </div>
  );
};

export default PolicyDescription;
