import "./OfficeCard.css";
import briefcase from "../../../../assets/briefcase.svg";
import planePaper from "../../../../assets/planePaper.svg";

const officeDetails = [
  {
    icon: "fa-location-dot",
    label: "Address",
    value: "6th Floor, ABC Tower, Sector 135, Noida UP 201301",
  },
  {
    icon: "fa-phone",
    label: "Phone",
    value: "+91 120 3512213",
  },
  {
    icon: "fa-envelope",
    label: "Email",
    value: "info@gepdec.in",
  },
  {
    icon: "fa-clock",
    label: "Office Hours",
    value: "9:30 AM - 6:30 PM",
  },
];

const OfficeCard = () => {
  return (
    <section className="office-card" aria-label="Corporate Head Office">
      <div className="office-card-top" />

      <div className="office-card-content">
        <div className="office-card-header">
          <div className="office-card-title-wrap">
            <span className="office-card-title-icon">
              <img src={briefcase} alt="briefcase" />
            </span>
            <h3>{"Corporate Head Office"}</h3>
          </div>
          <span className="office-card-tag">{"Head Office"}</span>
        </div>

        <span className="office-location-pill">
          <i className="fa-solid fa-location-dot" />
          Noida
        </span>

        <div className="office-card-divider" />

        <div className="office-card-details">
          {officeDetails.map(({ icon, label, value }) => (
            <div className="office-card-row" key={label}>
              <span className="office-card-row-icon">
                <i className={`fa-solid ${icon}`} />
              </span>
              <div className="office-card-row-body">
                <p className="office-card-row-label">{label}</p>
                <p className="office-card-row-value">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="office-card-divider" />

        <div className="office-card-actions">
          <button type="button" className="office-btn office-btn-primary">
            <i className="fa-regular fa-eye" />
            View Details
          </button>
          <button type="button" className="office-btn office-btn-outline">
            <i className="fa-solid fa-location-dot" />
            View on Map
          </button>
          <button type="button" className="office-btn-icon" aria-label="Share">
            <img src={planePaper} alt="plane-paper" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeCard;
