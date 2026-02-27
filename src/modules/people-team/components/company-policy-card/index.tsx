import InfoIcon from "../../../../assets/custom-svg/info";
import TagIcon from "../../../../assets/custom-svg/tag";
import doc from "../../../../assets/doc.svg";
import calendar from "../../../../assets/calendar.svg";
import reload from "../../../../assets/reload.svg";
import { Badge } from "../../../../components/badge";
import DateCon from "../../../../components/date-con";
import "./styles.css";
import { format } from "date-fns";
interface Props {
  id: number;
  title: string;
  category: string;
  acknowledgmentRequired: boolean;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  appliesTo: { id: number; value: string }[];
  description: string;
}
const CompanyPolicyCard: React.FC<Props> = (props) => {
  return (
    <div className="company-policy-card">
      <div className="custom-row gap-2 flex-wrap">
        <Badge
          label={props.category}
          showIcon
          icon={TagIcon}
          color="#4338CA"
          backgroundColor="#EEF2FF"
        />
        {props.acknowledgmentRequired && (
          <Badge
            label="Acknowledgment Required"
            showIcon
            icon={InfoIcon}
            color="#C2410C"
            backgroundColor="#FFF7ED"
          />
        )}
      </div>
      <div className="custom-row gap-2 flex-nowrap">
        <img src={doc} alt="" className="cm-policy-icon" />
        <div className="custom-column gap-1.25">
          <h3 className="cm-policy-title">{props.title}</h3>
          <p className="cm-policy-description">{props.description}</p>
        </div>
      </div>
      <div className="custom-row gap-3 flex-wrap cmp-mis-con">
        <Badge label={props.version} backgroundColor="#F0F2F5" color="#62748E" isRounded={false} />
        <div className="custom-row gap-3 flex-nowrap">
          <DateCon
            icon={calendar}
            label="Effective"
            date={format(new Date(props.effectiveDate), "MMM dd, yyyy")}
          />
          <DateCon
            icon={reload}
            label="Updated"
            date={format(new Date(props.lastUpdated), "MMM dd, yyyy")}
          />
        </div>
      </div>
      <div className="custom-row align-items-center gap-2 cmp-applies-con">
        <p>{"Applies to:  "}</p>
        {props.appliesTo.map((item) => (
          <Badge
            label={item.value}
            backgroundColor="#F9FAFB"
            color="#62748E"
            borderColor="#E5E7EB"
          />
        ))}
      </div>
      <div className="custom-row justify-content-between gap-3">
        <button className="base-button w-50">View Policy</button>
        <button className="base-outline-button w-50">Download</button>
      </div>
    </div>
  );
};

export default CompanyPolicyCard;
