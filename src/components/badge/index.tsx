import "./styles.css";

interface DotProps {
  dotColor?: string;
}
interface Props extends DotProps {
  label?: string;
  showDot?: boolean;
  showIcon?: boolean;
  icon?: string | React.ElementType;
  backgroundColor?: string;
  color?: string;
  dotColor?: string;
  borderColor?: string;
  isRounded?: boolean;
}

export const Badge: React.FC<Props> = (props) => {
  const {
    label = "",
    showDot = false,
    backgroundColor,
    color,
    dotColor,
    showIcon = false,
    icon: Icon,
    isRounded = true,
    borderColor,
  } = props;
  return (
    <div
      className="badge-container"
      style={{
        background: backgroundColor,
        borderRadius: isRounded ? "33554400px" : "4px",
        border: borderColor ? `1px solid ${borderColor}` : "none",
      }}
    >
      {showDot && <BadgeDot dotColor={dotColor} />}
      {showIcon &&
        Icon &&
        (typeof Icon === "string" ? (
          <img src={Icon} alt="badge-icon" className="badge-icon" />
        ) : (
          <Icon className="badge-icon" color={color} />
        ))}
      <span className="badge-label" style={{ color: color }}>
        {label}
      </span>
    </div>
  );
};

export const BadgeDot: React.FC<DotProps> = ({ dotColor }) => {
  return <div className="badge-dot" style={{ background: dotColor }} />;
};
