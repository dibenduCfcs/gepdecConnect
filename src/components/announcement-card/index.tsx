import type React from "react";
import "./styles.css";
import calendar from "../../assets/calendar.svg";
import { Badge, BadgeDot } from "../badge";
import DateCon from "../date-con";
import ReadMoreCard from "../read-more";
import Seperator from "../seperator";
import FolderIcon from "../../assets/custom-svg/folder";
import mapPin from "../../assets/mapPin.svg";

interface Props {
  cardType?: "IT" | "Project";
  id: number;
  title?: string;
  date?: string;
  priority?: string;
  status?: string;
  postedDate?: string;
  department?: string;
  location?: string;
  author?: string;
  designation?: string;
  category?: string;
  affectedSystem?: string;
  description?: string;
}

const AnnouncementCard: React.FC<Props> = (props) => {
  const { cardType = "IT" } = props;
  const renderTitleCategory = () => {
    return (
      <div className="anc-title-cat-cont">
        <h3 className="anc-title">{props.title}</h3>
        <Badge
          label={props.category}
          backgroundColor={"#FFF4E5"}
          color="#C4710A"
          dotColor="#E98C20"
          showDot
        />
      </div>
    );
  };
  return (
    <div className="annoucement-card">
      {renderTitleCategory()}
      {cardType === "IT" && (
        <div className="anc-mis">
          <DateCon icon={calendar} date={props.date} />
          <div className="anc-date-con">
            <BadgeDot dotColor="#D1D9E0" />
            <Badge
              label={props.priority}
              backgroundColor={"#FFF4E5"}
              color="#C4710A"
              dotColor="#E98C20"
              showDot
            />
            <BadgeDot dotColor="#D1D9E0" />
            <Badge
              label={props.status}
              backgroundColor={"#EAF0FF"}
              color="#3B6FE0"
              showDot={false}
            />
            <BadgeDot dotColor="#D1D9E0" />
            <Badge label={props.affectedSystem} color="#62748E" showDot={false} />
          </div>
        </div>
      )}
      {cardType === "Project" && (
        <div className="anc-mis custom-column">
          <div className="d-flex gap-1 flex-wrap">
            <Badge
              label={props.department}
              showIcon
              icon={FolderIcon}
              backgroundColor="#F0FAE8"
              color="#4A9B2A"
              isRounded={false}
            />
            <Badge
              label={props.location}
              showIcon
              icon={mapPin}
              color="#62748E"
              isRounded={false}
            />
          </div>
          <div className="d-flex gap-3 align-items-center flex-wrap">
            <DateCon
              icon={calendar}
              date={props.postedDate}
              label="Posted"
              labelColor="#62748E"
              dateColor="#121F0A"
            />
            <BadgeDot dotColor="#62748E" />
            <DateCon
              icon={calendar}
              date={props.author}
              label="By"
              labelColor="#62748E"
              dateColor="#121F0A"
            />
            <BadgeDot dotColor="#62748E" />
            <Badge
              label={props.designation}
              showIcon
              icon={FolderIcon}
              backgroundColor="#F0F3F7"
              color="#62748E"
              isRounded={false}
            />
          </div>
          <Seperator />
        </div>
      )}
      <ReadMoreCard value={props.description} />
    </div>
  );
};
export default AnnouncementCard;
