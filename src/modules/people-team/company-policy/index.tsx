import { useState } from "react";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import CheckBox from "../../../components/check-box";
import Container from "../../../components/container";
import Label from "../../../components/label";
import RadioButton from "../../../components/radio-button";
import SideBar from "../../../components/sidebar";
import TitleContainer from "../../../components/title-con";
import CompanyPolicyCard from "../components/company-policy-card";
import grid from "../../../assets/image/grid.png";
import list from "../../../assets/image/list.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import FilterSortBar from "../../../components/filter-sort-bar";

const policyCategoryData = [
  { id: 1, value: "Code of Conduct" },
  { id: 2, value: "HR Policies" },
  { id: 3, value: "Leave & Attendance" },
  { id: 4, value: "IT & Security" },
  { id: 5, value: "Finance & Reimbursement" },
  { id: 6, value: "Travel Policy" },
  { id: 7, value: "Workplace Safety" },
  { id: 8, value: "Compliance & Legal" },
  { id: 9, value: "Remote Work" },
];
const applicableToData = [
  { id: 1, value: "All Employees" },
  { id: 2, value: "Corporate Office" },
  { id: 3, value: "Site Offices" },
  { id: 4, value: "Project Teams" },
  { id: 5, value: "Management Only" },
];
const effectiveDateData = [
  { id: 1, value: "Recently Updated (Last 30 Days)" },
  { id: 2, value: "This Year" },
  { id: 3, value: "Custom Date Range" },
];

const companyPolicyData = [
  {
    id: 1,
    title: "Employee Code of Conduct",
    category: "Code of Conduct",
    acknowledgmentRequired: true,
    version: "v3.2",
    effectiveDate: "2024-01-01",
    lastUpdated: "2025-12-15",
    appliesTo: [{ id: 1, value: "All Employees" }],
    description:
      "Defines the standards of professional behavior, ethical responsibilities, and conduct expectations for all employees across all departments and levels.",
  },
  {
    id: 2,
    title: "Annual & Casual Leave Policy",
    category: "Leave & Attendance",
    acknowledgmentRequired: false,
    version: "v2.1",
    effectiveDate: "2024-03-01",
    lastUpdated: "2025-11-20",
    appliesTo: [{ id: 1, value: "All Employees" }],
    description:
      "Outlines entitlements, procedures, and guidelines for annual leave, casual leave, sick leave, and other time-off requests for all permanent employees.",
  },
  {
    id: 3,
    title: "IT Systems & Acceptable Use Policy",
    category: "IT & Security",
    acknowledgmentRequired: true,
    version: "v4.0",
    effectiveDate: "2024-06-01",
    lastUpdated: "2026-01-10",
    appliesTo: [
      { id: 1, value: "All Employees" },
      { id: 2, value: "Corporate Office" },
    ],
    description:
      "Governs the use of company IT infrastructure, devices, software, and internet resources to ensure security, compliance, and responsible usage.",
  },
  {
    id: 4,
    title: "Travel & Expense Reimbursement Policy",
    category: "Travel Policy",
    acknowledgmentRequired: false,
    version: "v2.5",
    effectiveDate: "2023-09-01",
    lastUpdated: "2025-10-05",
    appliesTo: [
      { id: 1, value: "All Employees" },
      { id: 3, value: "Project Teams" },
    ],
    description:
      "Details the procedures for booking business travel, approved expense categories, reimbursement limits, and claim submission timelines.",
  },
  {
    id: 5,
    title: "Workplace Health & Safety Policy",
    category: "Workplace Safety",
    acknowledgmentRequired: true,
    version: "v3.0",
    effectiveDate: "2024-01-15",
    lastUpdated: "2025-09-28",
    appliesTo: [
      { id: 1, value: "All Employees" },
      { id: 4, value: "Site Offices" },
    ],
    description:
      "Establishes the company's commitment to maintaining a safe working environment, including incident reporting procedures and compliance.",
  },
  {
    id: 6,
    title: "Anti-Harassment & Discrimination Policy",
    category: "Compliance & Legal",
    acknowledgmentRequired: true,
    version: "v2.3",
    effectiveDate: "2023-07-01",
    lastUpdated: "2025-08-14",
    appliesTo: [{ id: 1, value: "All Employees" }],
    description:
      "Defines the company's zero-tolerance stance on harassment, bullying, and discrimination, including reporting mechanisms and disciplinary actions.",
  },
  {
    id: 7,
    title: "Remote Work & Hybrid Policy",
    category: "Remote Work",
    acknowledgmentRequired: false,
    version: "v1.8",
    effectiveDate: "2024-04-01",
    lastUpdated: "2026-01-28",
    appliesTo: [
      { id: 1, value: "All Employees" },
      { id: 2, value: "Corporate Office" },
    ],
    description:
      "Sets the framework for remote and hybrid work arrangements, including eligibility, productivity expectations, equipment provisions, and communication standards.",
  },
  {
    id: 8,
    title: "Employee Performance Management Policy",
    category: "HR Policies",
    acknowledgmentRequired: false,
    version: "v2.0",
    effectiveDate: "2024-01-01",
    lastUpdated: "2025-07-30",
    appliesTo: [
      { id: 1, value: "All Employees" },
      { id: 5, value: "Management Only" },
    ],
    description:
      "Describes the performance review cycle, KPI setting process, feedback mechanisms, and criteria for performance-based decisions.",
  },
  {
    id: 9,
    title: "Finance & Procurement Guidelines",
    category: "Finance & Reimbursement",
    acknowledgmentRequired: false,
    version: "v3.1",
    effectiveDate: "2023-04-01",
    lastUpdated: "2025-06-12",
    appliesTo: [
      { id: 5, value: "Management Only" },
      { id: 2, value: "Corporate Office" },
    ],
    description:
      "Covers authorization levels, procurement procedures, vendor management, budgeting controls, and financial compliance requirements.",
  },
  {
    id: 10,
    title: "Attendance & Punctuality Policy",
    category: "Leave & Attendance",
    acknowledgmentRequired: false,
    version: "v1.5",
    effectiveDate: "2023-06-01",
    lastUpdated: "2025-05-20",
    appliesTo: [
      { id: 1, value: "All Employees" },
      { id: 4, value: "Site Offices" },
    ],
    description:
      "Explains attendance tracking, grace periods, late arrival procedures, and disciplinary measures for unexcused absences.",
  },
];
const CompanyPolicy = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<"grid" | "list">("grid");
  return (
    <div className="max-width-screen">
      <Breadcrmb
        items={[
          { label: "Home", path: "/" },
          { label: "People Team", path: "/people-team" },
          { label: "Company Policy" },
        ]}
      />
      <TitleContainer titleFirst="Company" titleLast="Policy">
        <div className="view-toggle d-inline-flex p-1 rounded bg-light cmp-hidden">
          <button
            className={`btn btn-sm ${view === "grid" ? "active-view" : ""}`}
            onClick={() => setView("grid")}
          >
            <img src={grid} alt="grid" />
          </button>

          <button
            className={`btn btn-sm ${view === "list" ? "active-view" : ""}`}
            onClick={() => setView("list")}
          >
            <img src={list} alt="grid" />
          </button>

          <div className={`toggle-slider ${view}`} />
        </div>
      </TitleContainer>
      <Container>
        <SideBar
          title="Filter Policies"
          leftTitle="Company Policy"
          onClick={(e) => e.stopPropagation()}
          headerBackground={"#F9FAFB"}
        >
          <Label title="Policy Category">
            <CheckBox
              data={policyCategoryData}
              onChange={(item) => console.log(item)}
              color={"#62748E"}
            />
          </Label>
          <Label title="Applicable To">
            <CheckBox
              data={applicableToData}
              onChange={(item) => console.log(item)}
              color={"#62748E"}
            />
          </Label>
          <Label title="Effective Date">
            <RadioButton
              data={effectiveDateData}
              onChange={(item) => console.log(item)}
              color={"#62748E"}
            />
          </Label>
        </SideBar>
        <div className={"right-container"}>
          <FilterSortBar count={8} totalCount={8} sortByName={"Newest First"} />
          <div
            className={view === "grid" ? "anc-list-container-grid grid-2" : "anc-list-container"}
          >
            {companyPolicyData.map((policy) => (
              <CompanyPolicyCard
                key={policy.id}
                id={policy.id}
                title={policy.title}
                category={policy.category}
                acknowledgmentRequired={policy.acknowledgmentRequired}
                version={policy.version}
                effectiveDate={policy.effectiveDate}
                lastUpdated={policy.lastUpdated}
                appliesTo={policy.appliesTo}
                description={policy.description}
                onViewPress={() => {
                  navigate(`/people-team/company-policy/policy-description`, { state: policy });
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyPolicy;
