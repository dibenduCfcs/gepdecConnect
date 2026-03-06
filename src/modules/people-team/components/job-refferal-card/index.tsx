import "./styles.css";
import briefCase from "../../../../assets/image/Briefcase.png";
import clock from "../../../../assets/image/Clock.png";
import graduationCap from "../../../../assets/image/GraduationCap.png";
import mapPin from "../../../../assets/image/MapPin.png";
import calendar from "../../../../assets/calendar.svg";
import Seperator from "../../../../components/seperator";
import DateCon from "../../../../components/date-con";
import { Badge } from "../../../../components/badge";
import colors from "../../../../static/colors";
const JobRefferalCard = () => {
  const renderKeyValue = (title: string, icon: string) => {
    return (
      <div className="jr-key-value">
        <div className="jr-icon-con">
          <img src={icon} alt="" />
        </div>
        <p>{title}</p>
      </div>
    );
  };
  return (
    <div className="job-refferal-con">
      <div className="custom-row justify-content-start align-items-center gap-3  w-100">
        <div
          className="
        "
        >
          <i className="fa-solid fa-building" />
        </div>
        <div>
          <p>{"Site Incharge"}</p>
          <Badge
            label="Enginnering"
            isRounded={false}
            color={colors.textSecondary}
            backgroundColor={colors.badgeColor}
            borderColor={colors.borderColor}
          />
        </div>
      </div>
      <div className="job-ref-key-value-con">
        {renderKeyValue("5–10 Years", briefCase)}
        {renderKeyValue("Noida", mapPin)}
        {renderKeyValue("B.Tech / Diploma (Civil)", graduationCap)}
        {renderKeyValue("Full-Time", clock)}
      </div>
      <Seperator />
      <div className="custom-row justify-content-between align-items-center w-100">
        <DateCon date="Posted 2 Mar 2026" icon={calendar} />
        <button type="button" className="jr-apply-btn">
          View Details &rarr;
        </button>
      </div>
    </div>
  );
};

export default JobRefferalCard;
