import { useState } from "react";
import Accordion from "../../../components/accordion";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import Container from "../../../components/container";
import InputBox from "../../../components/input-box";
import SideBar from "../../../components/sidebar";
import TitleContainer from "../../../components/title-con";
import colors from "../../../static/colors";
import Seperator from "../../../components/seperator";
import CheckBox from "../../../components/check-box";
import RadioButton from "../../../components/radio-button";
import type { IdValue } from "../../../static/interface";
import FilterSortBar from "../../../components/filter-sort-bar";
import Label from "../../../components/label";
import "./styles.css";
import DropdownBox from "../../../components/dropdown-box";
import JobRefferalCard from "../components/job-refferal-card";
import { useNavigate } from "react-router-dom";

interface FilterType {
  department: IdValue[];
  location: IdValue[];
  experienceLevel: IdValue;
  sortBy: IdValue;
}

const initialFilterData = {
  department: [],
  location: [],
  experienceLevel: { id: 0, value: "" },
  sortBy: { id: 1, value: "Newest First" },
};

const departmentData = [
  { id: 1, value: "Engineering" },
  { id: 2, value: "Finance" },
  { id: 3, value: "HR" },
  { id: 4, value: "Operations" },
  { id: 5, value: "IT" },
  { id: 6, value: "Marketing" },
  { id: 7, value: "Legal" },
  { id: 8, value: "Admin" },
];
const locationData = [
  { id: 1, value: "Noida" },
  { id: 2, value: "Mumbai" },
  { id: 3, value: "Bangalore" },
  { id: 4, value: "Chennai" },
  { id: 5, value: "Hyderabad" },
];

const experienceData = [
  { id: 1, value: "0–2 Years" },
  { id: 2, value: "2–5 Years" },
  { id: 3, value: "5–10 Years" },
  { id: 4, value: "10–15 Years" },
  { id: 5, value: "15+ Years" },
];

const sortData = [
  { id: 1, value: "Newest First" },
  { id: 2, value: "Oldest First" },
];

const jobData = [
  {
    id: 1,
    title: "Site Incharge",
    department: "Engineering",
    experience: "5–10 Years",
    location: "Noida",
    qualification: "B.Tech / Diploma (Civil)",
    employmentType: "Full-Time",
    postedDate: "2026-03-02",
  },
  {
    id: 2,
    title: "Electrical Supervisor",
    department: "Engineering",
    experience: "5–10 Years",
    location: "Bangalore",
    qualification: "Diploma / B.Tech (Electrical)",
    employmentType: "Full-Time",
    postedDate: "2026-03-02",
  },
  {
    id: 3,
    title: "Junior Financial Analyst",
    department: "Finance",
    experience: "0–2 Years",
    location: "Hyderabad",
    qualification: "B.Com / MBA Finance",
    employmentType: "Full-Time",
    postedDate: "2026-03-01",
  },
  {
    id: 4,
    title: "Site Engineer",
    department: "Engineering",
    experience: "2–5 Years",
    location: "Chennai",
    qualification: "B.Tech (Civil)",
    employmentType: "Full-Time",
    postedDate: "2026-03-01",
  },
  {
    id: 5,
    title: "HR Business Partner",
    department: "HR",
    experience: "5–10 Years",
    location: "Hyderabad",
    qualification: "MBA – HR",
    employmentType: "Full-Time",
    postedDate: "2026-02-28",
  },
  {
    id: 6,
    title: "IT Infrastructure Lead",
    department: "IT",
    experience: "10–15 Years",
    location: "Bangalore",
    qualification: "B.Tech / BE",
    employmentType: "Full-Time",
    postedDate: "2026-02-28",
  },
  {
    id: 7,
    title: "Project Manager",
    department: "Engineering",
    experience: "10–15 Years",
    location: "Noida",
    qualification: "B.Tech / MBA",
    employmentType: "Full-Time",
    postedDate: "2026-02-28",
  },
  {
    id: 8,
    title: "Deputy General Manager",
    department: "Engineering",
    experience: "15+ Years",
    location: "Noida",
    qualification: "BEE / BBA / MBA",
    employmentType: "Full-Time",
    postedDate: "2026-02-27",
  },
  {
    id: 9,
    title: "Marketing Manager",
    department: "Marketing",
    experience: "5–10 Years",
    location: "Noida",
    qualification: "MBA – Marketing",
    employmentType: "Full-Time",
    postedDate: "2026-02-26",
  },
  {
    id: 10,
    title: "Finance Manager",
    department: "Finance",
    experience: "10–15 Years",
    location: "Mumbai",
    qualification: "CA / MBA Finance",
    employmentType: "Full-Time",
    postedDate: "2026-02-25",
  },
  {
    id: 11,
    title: "MEP Engineer",
    department: "Engineering",
    experience: "5–10 Years",
    location: "Mumbai",
    qualification: "B.Tech (Mechanical / Electrical)",
    employmentType: "Full-Time",
    postedDate: "2026-02-25",
  },
  {
    id: 12,
    title: "Legal Counsel",
    department: "Legal",
    experience: "10–15 Years",
    location: "Mumbai",
    qualification: "LLB / LLM",
    employmentType: "Full-Time",
    postedDate: "2026-02-24",
  },
  {
    id: 13,
    title: "Operations Head",
    department: "Operations",
    experience: "15+ Years",
    location: "Chennai",
    qualification: "BE / MBA Operations",
    employmentType: "Full-Time",
    postedDate: "2026-02-23",
  },
  {
    id: 14,
    title: "Admin & Facilities Manager",
    department: "Admin",
    experience: "5–10 Years",
    location: "Chennai",
    qualification: "BBA / MBA",
    employmentType: "Full-Time",
    postedDate: "2026-02-22",
  },
];

const InternalJobRefferal = () => {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState<FilterType>(initialFilterData);
  const [search, setSearch] = useState("");
  return (
    <div className="max-width-screen">
      <Breadcrmb
        items={[
          { label: "Home", path: "/" },
          { label: "People Team", path: "/people-team" },
          { label: "Internal Job Refferal" },
        ]}
      />
      <TitleContainer titleLast="Internal Job Referral" />
      <Container>
        <SideBar
          title="Filter Job Listings"
          leftTitle="Internal Job Refferal"
          rightTitle="Filter"
          headerBackground={colors.white}
        >
          <Accordion title="Search">
            <InputBox
              inputPlaceholder="Job title or department…"
              inputValue={search}
              onInputChange={(e) => setSearch(e.target.value)}
              name="search"
            />
          </Accordion>
          <Seperator />
          <Accordion title="Department">
            <CheckBox
              data={departmentData}
              onChange={(item) => {
                setFilterData({ ...filterData, department: item });
              }}
            />
          </Accordion>
          <Seperator />
          <Accordion title="Location">
            <CheckBox
              data={locationData}
              onChange={(item) => {
                setFilterData({ ...filterData, location: item });
              }}
            />
          </Accordion>
          <Seperator />
          <Accordion title="Experience Level">
            <RadioButton
              data={[{ id: 0, value: "All" }, ...experienceData]}
              onChange={(item) => {
                setFilterData({ ...filterData, experienceLevel: item });
              }}
            />
          </Accordion>
          <Seperator />
          <Label title="Sort By" className="ijr-sort-by-label">
            <DropdownBox
              options={sortData}
              value={filterData.sortBy}
              onChange={(val) => {
                setFilterData({ ...filterData, sortBy: val });
              }}
            />
          </Label>
        </SideBar>

        <div className="right-container">
          <FilterSortBar count={8} totalCount={12} sortByName={filterData.sortBy.value} />
          <div className="anc-list-container-grid grid-2">
            {jobData.map((item) => (
              <JobRefferalCard
                key={item.id}
                title={item.title}
                department={item.department}
                experience={item.experience}
                location={item.location}
                qualification={item.qualification}
                employmentType={item.employmentType}
                postedDate={item.postedDate}
                onPress={() => {
                  navigate("/people-team/internal-job-refferal/job-description", { state: item });
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InternalJobRefferal;
