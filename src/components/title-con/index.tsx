import "./styles.css";
interface Props {
  titleFirst?: string;
  titleLast?: string;
  children?: React.ReactNode;
  className?: string;
}
const TitleContainer: React.FC<Props> = (props) => {
  return (
    <div className={`ttle-con ${props.className || ""}`}>
      <h1>
        <span className="ttle-first">{props.titleFirst}</span>{" "}
        <span className="ttle-last">{props.titleLast}</span>
      </h1>
      {props.children}
    </div>
  );
};

export default TitleContainer;
