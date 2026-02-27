import "./styles.css";

interface Props {
  children?: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return <div className="container-component">{children}</div>;
};

export default Container;
