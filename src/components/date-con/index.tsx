import "./styles.css";
interface Props {
  className?: string;
  icon?: string | React.ElementType;
  iconColor?: string;
  label?: string;
  date?: string;
  labelColor?: string;
  dateColor?: string;
}

const DateCon: React.FC<Props> = ({
  className = "",
  icon: Icon,
  iconColor = "#ffffff",
  date,
  label,
  labelColor = "#62748e",
  dateColor = "#62748e",
}) => {
  return (
    <div className={`date-con ${className}`}>
      {Icon &&
        (typeof Icon === "string" ? (
          <img src={Icon} alt="date-icon" />
        ) : (
          <Icon color={iconColor} />
        ))}
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
