import AnnouncementCard from "../../../components/announcement-card";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import Container from "../../../components/container";
import DropdownBox from "../../../components/dropdown-box";
import FilterSortBar from "../../../components/filter-sort-bar";
import InputBox from "../../../components/input-box";
import Label from "../../../components/label";
import RadioButton from "../../../components/radio-button";
import SideBar from "../../../components/sidebar";
import TitleContainer from "../../../components/title-con";
import "./styles.css";

const projectAnnouncementData = [
  {
    id: 1,
    title: "Transformer Erection Schedule – Bay 3 & Bay 4",
    postedDate: "20 Feb 2026",
    department: "AIS Substation",
    location: "Vadodara, Gujarat",
    author: "Rajesh Kumar",
    designation: "Project Manager",
    category: "Schedule",
    description:
      "Erection of 220kV power transformers at Bay 3 and Bay 4 is scheduled to commence from Monday. All civil foundation work must receive QC sign-off before the lifting crew mobilises. The crane operator briefing is confirmed for 6:00 AM. Daily erection progress reports are to be submitted to the site engineer by 5:30 PM each working day. Coordinate with the transformer vendor representative on site.",
  },
  {
    id: 2,
    title: "Mandatory Arc Flash Safety Training for All Site Personnel",
    postedDate: "19 Feb 2026",
    department: "GIS Substation",
    location: "Pune, Maharashtra",
    author: "Anita Sharma",
    designation: "HSE Manager",
    category: "Safety",
    description:
      "Effective immediately, all personnel working within the GIS hall and switchgear bays must complete the updated Arc Flash and High Voltage Safety training module before entering energized areas.",
  },
  {
    id: 3,
    title: "Subcontractor Invoice Submission – February Cycle",
    postedDate: "18 Feb 2026",
    department: "Transmission Substation",
    location: "Jodhpur, Rajasthan",
    author: "Vikram Nair",
    designation: "Finance Controller",
    category: "Finance",
    description:
      "All subcontractors engaged in civil, erection, and cable laying activities must submit January invoices along with supporting documentation including measurement books and material records.",
  },
  {
    id: 4,
    title: "Single Line Diagram Revision – Rev D Issued for Review",
    postedDate: "17 Feb 2026",
    department: "Substation & Transmission Line",
    location: "Chennai, Tamil Nadu",
    author: "Dr. Suresh Iyer",
    designation: "Chief Design Engineer",
    category: "Design",
    description:
      "Revised Single Line Diagrams (Rev D) for the 400/220kV substation have been issued for internal review and client comments. All protection and relay engineers must review the updates.",
  },
  {
    id: 5,
    title: "GIS Equipment Procurement – SF6 Circuit Breakers",
    postedDate: "15 Feb 2026",
    department: "GIS Substation",
    location: "Bengaluru, Karnataka",
    author: "Priya Menon",
    designation: "Procurement Head",
    category: "Procurement",
    description:
      "Procurement approval has been granted for 12 units of 145kV SF6 Gas-Insulated Circuit Breakers. Shortlisted vendors are requested to submit final technical and commercial bids.",
  },
  {
    id: 6,
    title: "Protection Relay Panel FAT – Schedule Confirmation",
    postedDate: "13 Feb 2026",
    department: "AIS Substation",
    location: "Surat, Gujarat",
    author: "Mohan Joshi",
    designation: "QA/QC Engineer",
    category: "Quality",
    description:
      "Factory Acceptance Tests (FAT) for the numerical protection relay panels are confirmed at the vendor’s Surat facility from 3rd to 5th March 2026.",
  },
  {
    id: 7,
    title: "Tower Stringing Schedule – Section T-22 to T-38",
    postedDate: "11 Feb 2026",
    department: "Substation & Transmission Line",
    location: "Bikaner, Rajasthan",
    author: "Deepak Verma",
    designation: "Project Manager",
    category: "Schedule",
    description:
      "Conductor stringing operations for the 220kV double-circuit transmission line between towers T-22 and T-38 will commence from 1st March 2026. The stringing contractor must complete all preparatory checks.",
  },
  {
    id: 8,
    title: "Site Allowance Revision – Field Engineering Staff",
    postedDate: "08 Feb 2026",
    department: "Transmission Substation",
    location: "Kolkata, West Bengal",
    author: "Sunita Das",
    designation: "HR Manager",
    category: "HR",
    description:
      "The revised site allowance structure applicable to all field engineering and supervisory staff posted at active substation and transmission line sites has been approved and is effective immediately.",
  },
];

const dateRangeData = [
  { id: 1, value: "All Time" },
  { id: 2, value: "This week" },
  { id: 3, value: "This Month" },
  { id: 4, value: "Last 3 Months" },
];
const ProjectAnnoucement = () => {
  return (
    <div className="max-width-screen">
      <Breadcrmb
        items={[
          { label: "Home", path: "/" },
          { label: "Project", path: "/it" },
          { label: "Project Announcements" },
        ]}
      />
      <TitleContainer titleFirst="Project" titleLast="Announcements" />
      <Container>
        <SideBar
          leftTitle="Project Announcements"
          rightTitle="Filter"
          title="Filter Announcements"
          headerBackground="linear-gradient(135deg, #FFF8EE 0%, #FFFCF7 100%)"
        >
          <Label title="Search" textTransform="uppercase" color="#62748E">
            <InputBox />
          </Label>
          <Label title="Project" textTransform="uppercase" color="#62748E">
            <DropdownBox options={[]} placeholder="Select Project" />
          </Label>
          <Label title="State" textTransform="uppercase" color="#62748E">
            <DropdownBox options={[]} placeholder="Select State" />
          </Label>
          <Label title="Date Range" textTransform="uppercase" color="#62748E">
            <RadioButton data={dateRangeData} onChange={(selected) => console.log(selected)} />
          </Label>
        </SideBar>
        <div className="right-container">
          <FilterSortBar count={8} totalCount={8} sortByName={"Newest First"} />
          <div className="anc-list-container">
            {projectAnnouncementData.map((item) => {
              return <AnnouncementCard key={item.id} cardType="Project" {...item} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectAnnoucement;
