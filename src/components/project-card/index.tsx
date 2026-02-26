import "./styles.css";
import mapPin from "../../assets/mapPin.svg";

interface Props {
  projectId: number;
  projectIcon: string;
  status: string;
  statusId: number;
  lastUpdate: string;
  projectName: string;
  location: {
    city: string;
    cityId: number;
    state: string;
    stateId: number;
    country: string;
    countryId: number;
  };
  reportLink: string;
}
const ProjectCard: React.FC<Props> = (props) => {
  return (
    <div className="project-card-container">
      <img src={props.projectIcon} alt="" className="project-icon" />
      <div className="project-bottom-container">
        <h3 className="project-title">{props.projectName}</h3>
        <div className="project-location-container">
          <img src={mapPin} alt="" className="report-icon" />
          <p className="project-location">
            {props.location.city +
              ", " +
              props.location.state +
              " " +
              props.location.country}
          </p>
        </div>
        <button className="project-view-report" type="button">
          {"View Report"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
