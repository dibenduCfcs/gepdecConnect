import "./styles.css";

interface Props {
  name?: string;
  backgroundColor?: string;
  nameClassName?: string;
}

const Seperator: React.FC<Props> = ({ name, backgroundColor, nameClassName = "" }) => {
  return (
    <div className="seperator">
      <p className={`seperator-name ${nameClassName}`} style={{ backgroundColor }}>
        {name}
      </p>
    </div>
  );
};
export default Seperator;
