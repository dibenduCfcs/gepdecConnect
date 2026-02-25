import "./styles.css";

interface Props {
  priority?: string;
  title?: string;
  description?: string;
  type?:
    | "callout-success"
    | "callout-info"
    | "callout-warning"
    | "callout-danger";
}
const CalloutCard: React.FC<Props> = ({
  type = "callout-info",
  priority,
  title,
  description,
}) => {
  return (
    <div className={`callout ${type}`}>
      <p className="callout-priority">{priority}</p>
      <h3 className="callout-title">{title}</h3>
      <p className="callout-description">{description}</p>
      <p className="callout-detail-btn">{"Read Details"}</p>
    </div>
  );
};

export default CalloutCard;
