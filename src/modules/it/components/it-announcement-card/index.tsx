import type React from 'react';
import './styles.css';
import calendar from '../../../../assets/calendar.svg';
import ReadMoreCard from '../../../../components/read-more';

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
  const renderRoundedCard = (label: string, showDot = true, applyColor = true) => {
    return (
      <div className="it-anc-round-card-con">
        {showDot && <div className="it-anc-dot" />}
        <span className="inc-anc-label">{label}</span>
      </div>
    );
  };
  const renderTitleCategory = () => {
    return (
      <div className="it-anc-title-cat-cont">
        <h3 className="it-anc-title">{props.title}</h3>
        {renderRoundedCard(props.category)}
      </div>
    );
  };
  return (
    <div className="it-annoucement-card">
      {renderTitleCategory()}
      <div className="it-anc-mis">
        <div className="it-anc-date-con">
          <img src={calendar} alt="calendar" />
          <span className="it-anc-date">{props.date}</span>
        </div>
        {renderRoundedCard(props.priority)}
        {renderRoundedCard(props.status, false)}
        {renderRoundedCard(props.affectedSystem, false, false)}
      </div>
      <ReadMoreCard value={props.description} />
    </div>
  );
};
export default ITAnnouncementCard;
