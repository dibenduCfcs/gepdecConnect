import "./styles.css";
interface Props {
  children?: React.ReactNode;
  title?: string;
}
const Label: React.FC<Props> = ({ children, title = "" }) => {
  return (
    <div className="label-component">
      {title && <p>{title}</p>}
      {children}
    </div>
  );
};
export default Label;
