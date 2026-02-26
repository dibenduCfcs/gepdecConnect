import "./styles.css";

interface DotProps {
  dotColor?: string;
}
interface Props extends DotProps {
  label?: string;
  showDot?: boolean;
  backgroundColor?: string;
  color?: string;
  dotColor?: string;
}

export const Badge: React.FC<Props> = (props) => {
  const { label = "", showDot = false, backgroundColor, color, dotColor } = props;
  return (
    <div className="badge-container" style={{ background: backgroundColor }}>
      {showDot && <BadgeDot dotColor={dotColor} />}
      <span className="badge-label" style={{ color: color }}>
        {label}
      </span>
    </div>
  );
};

export const BadgeDot: React.FC<DotProps> = ({ dotColor }) => {
  return <div className="badge-dot" style={{ background: dotColor }} />;
};
