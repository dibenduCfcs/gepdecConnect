import "./styles.css";
import corporate from "../../../../assets/corporate.svg";
const CorporateCard = () => {
  const renderStatCard = (
    statLabel: string,
    statValue?: number,
    color: "primary" | "secondary" | "tertiary" = "primary",
  ) => {
    return (
      <div className="stat-card">
        <h3 className={color}>{statValue}</h3>
        <span>{statLabel}</span>
      </div>
    );
  };
  return (
    <div className="corporate-card max-width-screen">
      <div className="header-content">
        <div className="title-row">
          <div className="icon-box">
            <img src={corporate} alt="corporate" className="icon-box" />
          </div>
          <div>
            <h2>{"Corporate Offices"}</h2>
            <p>
              {"Explore all company office locations across states and cities."}
            </p>
          </div>
        </div>

        <div className="stats-row">
          {renderStatCard("Total Offices", 12, "primary")}
          {renderStatCard("States Covered", 6, "secondary")}
          {renderStatCard("Head Office", 1, "tertiary")}
        </div>
      </div>
    </div>
  );
};

export default CorporateCard;
