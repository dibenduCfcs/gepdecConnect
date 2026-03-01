import "./styles.css";
import AISSubstation from "../../../../assets/image/AIS Substation.png";
import mapPin from "../../../../assets/mapPin.svg";
import { Badge } from "../../../../components/badge";
import DateCon from "../../../../components/date-con";
import DirectionIcon from "../../../../assets/custom-svg/direction";

const GuestHousesCard = () => {
  return (
    <div className="gh-con">
      <div className="gh-img-title-con">
        <div className="gh-img-con">
          <img src={AISSubstation} alt="" className="gh-img" />
        </div>
        <div>
          <h3 className="gh-title">{"Skyline 400kV Transmission Hub – Guest House 01"}</h3>
          <Badge label="Vadodara, Gujarat" color="#62748E" showIcon icon={mapPin} />
        </div>
      </div>
      <div className="gh-project">
        <div className="gh-project-name-con">
          <p className="gh-project-name">{"Skyline 400kV Transmission Hub"}</p>
          <p className="gh-project-code"># {"PRJ-VDR-2024"}</p>
        </div>
        <DateCon
          className="gh-direction"
          icon={DirectionIcon}
          label={"3.2 km"}
          date={"from site"}
          dateColor="#62748E"
          labelColor="#121F0A"
          iconColor="#E98C20"
        />
      </div>
      <div className="gh-personal-info-con">
        <div className="gh-personal-info">
          <Badge label="Ramesh Patel" />
          <Badge label={"+91 98250 34217"} />
        </div>
        <div className="gh-btn-con">
          <button className="base-button gh-button">
            <DirectionIcon color="#ffffff" />
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestHousesCard;
