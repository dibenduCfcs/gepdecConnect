import Accordion from "../../../../components/accordion";
import "./styles.css";
interface Props {
  title?: string;
  data: { title: string; description: string }[];
  index: number;
}

const EmployeeHandBookCard: React.FC<Props> = ({ title, data, index }) => {
  const renderArticle = ({ title, description }: { title: string; description: string }) => {
    return (
      <div className="emp-hb-art-con">
        <p className="emp-hb-art-title">{title}</p>
        <p className="emp-hb-art-des">{description}</p>
      </div>
    );
  };
  const renderSNo = () => {
    return <div className="emp-hb-sno">{index + 1}</div>;
  };
  return (
    <div>
      <Accordion
        title={title}
        titleClassName="emp-hb-accordion-title"
        headerClassName="emp-hb-accordion-header"
        bodyClassName="emp-hb-accordion-body"
        component="h3"
        renderExtra={renderSNo}
        arrowColor="#E98C20"
      >
        {data.map(renderArticle)}
      </Accordion>
    </div>
  );
};

export default EmployeeHandBookCard;
