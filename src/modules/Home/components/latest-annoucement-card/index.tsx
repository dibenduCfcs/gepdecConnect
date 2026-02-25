import "./styles.css";
import calendar from "../../../../assets/calendar.svg";

interface Props {
  department: string;
  date: string;
  title: string;
  description: string;
}
const LatestAnnoucementCard: React.FC<Props> = ({
  department,
  date,
  title,
  description,
}) => {
  return (
    <div className="latest-annoucement-container">
      <div className="latest-annoucement-top">
        <p className="latest-annoucement-department">{department}</p>
        <div className="latest-annoucement-date">
          <img src={calendar} alt="calendar" />
          <p className="latest-annoucement-date">{date}</p>
        </div>
      </div>
      <h3 className="latest-annoucement-title">{title}</h3>
      <p className="latest-annoucement-description">{description}</p>
    </div>
  );
};

export default LatestAnnoucementCard;
