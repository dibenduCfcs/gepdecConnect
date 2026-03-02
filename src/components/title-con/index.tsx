import "./styles.css";
import { useIsMobileWindow } from "../../hook";
interface Props {
  titleFirst?: string;
  titleLast?: string;
  children?: React.ReactNode;
  className?: string;
  showChildrenMobile?: boolean;
}
const TitleContainer: React.FC<Props> = (props) => {
  const isMobile = useIsMobileWindow();
  return (
    <div
      className={`ttle-con ${props.className || ""} ${props.showChildrenMobile ? "ttle-active" : "ttle-in-active"}`}
    >
      {!isMobile && (
        <h1>
          <span className="ttle-first">{props.titleFirst}</span>{" "}
          <span className="ttle-last">{props.titleLast}</span>
        </h1>
      )}
      {props.children}
    </div>
  );
};

export default TitleContainer;
