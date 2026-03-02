import "./styles.css";
import mapPin from "../../assets/mapPin.svg";
import { Badge } from "../badge";
import DateCon from "../date-con";
import type { ProjectProps } from "../../static/interface";
import { useUtilty } from "../../utils";

interface Props extends ProjectProps {
  cardType: "home" | "project";
}
const ProjectCard: React.FC<Partial<Props>> = (props) => {
  const {
    location = { city: "", cityId: 0, state: "", stateId: 0, country: "", countryId: 0 },
    cardType = "home",
  } = props;
  const { formatDateTime } = useUtilty();
  const getColor = () => {
    switch (props.statusId) {
      case 1:
        return { color: "#ffffff", backgroundColor: "#E98C20" };
      case 2:
        return { color: "#ffffff", backgroundColor: "#008236" };
      case 3:
        return { color: "#ffffff", backgroundColor: "#62748E" };
      default:
        return { color: "#ffffff", backgroundColor: "#E98C20" };
    }
  };

  return (
    <div className="project-card-container">
      <div
        className="project-icon"
        style={{ backgroundImage: `url(${props.projectIcon})`, backgroundSize: "cover" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {cardType === "project" && (
            <Badge
              label={props.latestPhotoLabel}
              color="#ffffff"
              backgroundColor="rgba(10, 16, 6, 0.55)"
              isRounded={false}
            />
          )}
          <Badge
            label={props.status}
            color={cardType === "project" ? getColor().color : "#008236"}
            backgroundColor={cardType === "project" ? getColor().backgroundColor : "#DCFCE7"}
            isRounded={cardType === "project"}
            showDot={cardType === "project"}
            dotColor="#FFFFFFB2"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
          {cardType === "project" && (
            <h3 className="project-title" style={{ color: "#ffffff" }}>
              {props.projectName}
            </h3>
          )}
          {cardType === "project" ? (
            <DateCon
              date={props.lastUpdate && formatDateTime(props.lastUpdate)}
              dateColor="#ffffff"
            />
          ) : (
            <DateCon
              date={props.lastUpdate}
              dateColor="#ffffff"
              label="Last Update"
              labelColor="#ffffff"
            />
          )}
        </div>
      </div>
      <div className="project-bottom-container">
        <h3 className="project-title">{props.projectName}</h3>
        <div className="project-location-container">
          <img src={mapPin} alt="" className="report-icon" />
          <p className="project-location">
            {location.city + ", " + location.state + " " + location.country}
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
