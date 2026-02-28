import "./styles.css";

interface Props {
  name?: string;
}

const Seperator: React.FC<Props> = ({ name }) => {
  return (
    <div className="seperator">
      <p className="seperator-name">{name}</p>
    </div>
  );
};
export default Seperator;
