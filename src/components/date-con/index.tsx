import "./styles.css";
interface Props {
  icon?: string;
  label?: string;
  date?: string;
  labelColor?: string;
  dateColor?: string;
}

const DateCon: React.FC<Props> = ({
  icon,
  date,
  label,
  labelColor = "#62748e",
  dateColor = "#62748e",
}) => {
  return (
    <div className="date-con">
      <img src={icon} alt="date-icon" />
      <span className="date-value" style={{ color: dateColor }}>
        {label && (
          <span style={{ color: labelColor }}>
            {label}
            {": "}
          </span>
        )}
        {date}
      </span>
    </div>
  );
};

export default DateCon;
