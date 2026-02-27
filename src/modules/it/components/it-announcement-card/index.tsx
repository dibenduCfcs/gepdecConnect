import type React from "react";
import "./styles.css";
import calendar from "../../../../assets/calendar.svg";
import ReadMoreCard from "../../../../components/read-more";
import { Badge, BadgeDot } from "../../../../components/badge";
import DateCon from "../../../../components/date-con";

interface Props {
  id: number;
  title: string;
  date: string;
  priority: string;
  status: string;
  category: string;
  affectedSystem: string;
  tags: string[];
  description: string;
  readMoreUrl: string;
}

const ITAnnouncementCard: React.FC<Props> = (props) => {
  const renderTitleCategory = () => {
    return (
      <div className="it-anc-title-cat-cont">
        <h3 className="it-anc-title">{props.title}</h3>
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
    <div className="it-annoucement-card">
      {renderTitleCategory()}
      <div className="it-anc-mis">
        <DateCon icon={calendar} date={props.date} />
        <div className="it-anc-date-con">
          <Badge
            label={props.priority}
            backgroundColor={"#FFF4E5"}
            color="#C4710A"
            dotColor="#E98C20"
            showDot
          />
          <BadgeDot dotColor="#D1D9E0" />
          <Badge label={props.status} backgroundColor={"#EAF0FF"} color="#3B6FE0" showDot={false} />
          <BadgeDot dotColor="#D1D9E0" />
          <Badge label={props.affectedSystem} color="#62748E" showDot={false} />
        </div>
      </div>
      <ReadMoreCard value={props.description} />
    </div>
  );
};
export default ITAnnouncementCard;
