import InfoIcon from "../../../../assets/custom-svg/info";
import TagIcon from "../../../../assets/custom-svg/tag";
import doc from "../../../../assets/doc.svg";
import calendar from "../../../../assets/calendar.svg";
import reload from "../../../../assets/reload.svg";
import { Badge } from "../../../../components/badge";
import DateCon from "../../../../components/date-con";
import "./styles.css";
import { format } from "date-fns";
import DownloadIcon from "../../../../assets/custom-svg/download";
import OpenEye from "../../../../assets/custom-svg/openEye";
import colors from "../../../../static/colors";
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
  onViewPress?: () => void;
}
const CompanyPolicyCard: React.FC<Props> = (props) => {
  return (
    <div className="company-policy-card">
      <div className="custom-row gap-2 justify-content-between align-items-center">
        <div className="custom-row gap-2 flex-wrap">
          <Badge
            label={props.category}
            showIcon
            icon={TagIcon}
            color={colors.background}
            backgroundColor={colors.badgeColor}
            borderColor={colors.borderColor}
          />
          {props.acknowledgmentRequired && (
            <Badge
              label="Acknowledgment Required"
              showIcon
              icon={InfoIcon}
              color={colors.background}
              backgroundColor={colors.badgeColor}
              borderColor={colors.borderColor}
            />
          )}
        </div>
        <Badge
          label={"Active"}
          color={colors.background}
          backgroundColor={colors.badgeColor}
          borderColor={colors.borderColor}
        />
      </div>
      <div className="custom-row gap-2 flex-nowrap">
        <img src={doc} alt="" className="cm-policy-icon" />
        <div className="custom-column gap-1.25">
          <h3 className="cm-policy-title">{props.title}</h3>
          <p className="cm-policy-description">{props.description}</p>
        </div>
      </div>
      <div className="custom-row gap-3 flex-wrap cmp-mis-con">
        <Badge
          label={props.version}
          color={colors.background}
          backgroundColor={colors.badgeColor}
          borderColor={colors.borderColor}
          isRounded={false}
        />
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
            color={colors.background}
            backgroundColor={colors.badgeColor}
            borderColor={colors.borderColor}
          />
        ))}
      </div>
      <div className="custom-row justify-content-between gap-3">
        <button className="base-button badge-con badge-text w-50" onClick={props.onViewPress}>
          <OpenEye color="#121F0A" />
          View Policy
        </button>
        <button className="base-outline-button badge-con badge-text w-50">
          <DownloadIcon color="#121F0A" />
          Download
        </button>
      </div>
    </div>
  );
};

export default CompanyPolicyCard;
