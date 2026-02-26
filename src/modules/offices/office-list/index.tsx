import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import DropdownBox from "../../../components/dropdown-box";
import Filter from "../../../components/filter";
import InputBox from "../../../components/input-box";
import CorporateCard from "../components/corporate-card";
import OfficeCard from "../components/office-card/OfficeCard";
import filterIcon from "../../../assets/filter.svg";
import "./styles.css";

const stateList = [
  { id: 1, value: "Andhra Pradesh" },
  { id: 2, value: "Arunachal Pradesh" },
  { id: 3, value: "Assam" },
  { id: 4, value: "Bihar" },
  { id: 5, value: "Chhattisgarh" },
  { id: 6, value: "Goa" },
  { id: 7, value: "Gujarat" },
  { id: 8, value: "Haryana" },
  { id: 9, value: "Himachal Pradesh" },
  { id: 10, value: "Jharkhand" },
  { id: 11, value: "Karnataka" },
  { id: 12, value: "Kerala" },
  { id: 13, value: "Madhya Pradesh" },
  { id: 14, value: "Maharashtra" },
  { id: 15, value: "Manipur" },
  { id: 16, value: "Meghalaya" },
  { id: 17, value: "Mizoram" },
  { id: 18, value: "Nagaland" },
  { id: 19, value: "Odisha" },
  { id: 20, value: "Punjab" },
  { id: 21, value: "Rajasthan" },
  { id: 22, value: "Sikkim" },
  { id: 23, value: "Tamil Nadu" },
  { id: 24, value: "Telangana" },
  { id: 25, value: "Tripura" },
  { id: 26, value: "Uttar Pradesh" },
  { id: 27, value: "Uttarakhand" },
  { id: 28, value: "West Bengal" },
];

const officeType = [
  { id: 1, value: "Head Office" },
  { id: 2, value: "Corporate Office" },
  { id: 3, value: "Regional Office" },
  { id: 4, value: "Zonal Office" },
  { id: 5, value: "Branch Office" },
  { id: 6, value: "Field Office" },
  { id: 7, value: "Project Office" },
  { id: 8, value: "Site Office" },
  { id: 9, value: "Representative Office" },
  { id: 10, value: "Liaison Office" },
  { id: 11, value: "Sales Office" },
  { id: 12, value: "Support Office" },
  { id: 13, value: "Administrative Office" },
  { id: 14, value: "Back Office" },
  { id: 15, value: "Front Office" },
  { id: 16, value: "Virtual Office" },
  { id: 17, value: "Shared Office" },
  { id: 18, value: "Co-working Office" },
  { id: 19, value: "Satellite Office" },
  { id: 20, value: "Registered Office" },
];

const OfficeList = () => {
  const officeDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const renderLeft = () => {
    return (
      <div className="render-left-container">
        <img src={filterIcon} alt="filter-icon" />
        <span className="render-left-title">{"Filters:"}</span>
      </div>
    );
  };
  return (
    <div className="office-list max-width-screen">
      <Breadcrmb items={[{ label: "Home", path: "/" }, { label: "Offices" }]} />
      <CorporateCard />
      <Filter>
        <InputBox width={"443.578px"} />
        <DropdownBox
          renderLeft={renderLeft}
          options={stateList}
          width={"221.78px"}
          placeholder="Select State"
        />

        <DropdownBox options={officeType} width={"221.78px"} placeholder="All Office Types" />
      </Filter>
      <div className="office-list-section">
        <h3>{"12 Offices"}</h3>
        <div className="office-list-container">
          {officeDetails.map((item) => (
            <OfficeCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeList;
