import { useState } from "react";
import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import Container from "../../../components/container";
import SideBar from "../../../components/sidebar";
import EmployeeHandBookCard from "../components/employee-handbook-card";
import { useWindowDimension } from "../../../hook";
import TitleContainer from "../../../components/title-con";
import "./styles.css";
import { BadgeDot } from "../../../components/badge";
import { format } from "date-fns";
import InputBox from "../../../components/input-box";
import Seperator from "../../../components/seperator";
import CheckBox from "../../../components/check-box";
import calendar from "../../../assets/calendar.svg";
import DownloadIcon from "../../../assets/custom-svg/download";
import PrintIcon from "../../../assets/custom-svg/print";

const employeeHandbookData = [
  {
    id: 1,
    title: "Introduction",
    content: [
      {
        title: "Company Purpose",
        description:
          "Our organization exists to create meaningful, lasting value for our clients, employees, and communities.",
      },
      {
        title: "Core Values",
        description:
          "Integrity, Collaboration, Excellence, Respect, and Innovation guide everything we do.",
      },
      {
        title: "Governance",
        description:
          "This handbook is issued by the Human Resources Department and approved by the Executive Leadership Team.",
      },
    ],
  },
  {
    id: 2,
    title: "Company Overview",
    content: [
      {
        title: "Our Vision",
        description: "To be the most trusted and impactful organization in our industry.",
      },
      {
        title: "Our Mission",
        description:
          "We deliver innovative solutions that address complex challenges and create sustainable growth.",
      },
      {
        title: "Organizational Structure",
        description:
          "The company operates through structured functional departments reporting to executive leadership.",
      },
    ],
  },
  {
    id: 3,
    title: "Employment Terms",
    content: [
      {
        title: "Probation Period",
        description:
          "All new employees are subject to a probation period of six (6) months from the date of joining.",
      },
      {
        title: "Confirmation of Employment",
        description:
          "Upon successful completion of probation, employees receive formal confirmation.",
      },
      {
        title: "Employment Contracts",
        description:
          "Employees must sign an employment agreement outlining role, compensation, and responsibilities.",
      },
    ],
  },
  {
    id: 4,
    title: "Work Culture & Conduct",
    content: [
      {
        title: "Code of Conduct",
        description:
          "Employees must uphold the highest standards of professionalism and ethical behavior.",
      },
      {
        title: "Anti-Harassment Policy",
        description:
          "The company maintains a zero-tolerance policy toward harassment or discrimination.",
      },
      {
        title: "Workplace Behavior",
        description:
          "Employees are expected to maintain a respectful, inclusive, and collaborative work environment.",
      },
    ],
  },
  {
    id: 5,
    title: "Leave & Benefits",
    content: [
      {
        title: "Leave Types",
        description:
          "Includes Annual Leave, Sick Leave, Casual Leave, Maternity Leave, Paternity Leave, and Bereavement Leave.",
      },
      {
        title: "Eligibility",
        description: "Leave eligibility depends on employment status and applicable policies.",
      },
      {
        title: "Approval Process",
        description: "All leave requests must be submitted through the HRMS portal for approval.",
      },
    ],
  },
  {
    id: 6,
    title: "Compensation Structure",
    content: [
      {
        title: "Payroll Cycle",
        description: "Salaries are processed on the last working day of each month.",
      },
      {
        title: "Insurance Benefits",
        description: "Employees are covered under Group Health Insurance and related benefits.",
      },
      {
        title: "Statutory Benefits",
        description:
          "Includes Provident Fund (PF), ESI, Professional Tax, and Gratuity as applicable.",
      },
    ],
  },
  {
    id: 7,
    title: "IT & Security Guidelines",
    content: [
      {
        title: "Email & Communication Usage",
        description: "Company email accounts must be used strictly for professional purposes.",
      },
      {
        title: "Data Protection",
        description: "Employees must safeguard confidential and proprietary information.",
      },
      {
        title: "Asset Usage",
        description: "Company assets must be handled responsibly and returned upon exit.",
      },
    ],
  },
  {
    id: 8,
    title: "Disciplinary Policy",
    content: [
      {
        title: "Misconduct Categories",
        description: "Misconduct is classified into minor and major categories.",
      },
      {
        title: "Warning Process",
        description: "Disciplinary actions may include verbal, written, and final warnings.",
      },
      {
        title: "Escalation & Termination",
        description: "Serious violations may lead to suspension or termination.",
      },
    ],
  },
  {
    id: 9,
    title: "Exit Policy",
    content: [
      {
        title: "Notice Period",
        description:
          "Employees must serve a notice period as defined in their employment contract.",
      },
      {
        title: "Final Settlement",
        description: "Full and final settlement is processed after clearance completion.",
      },
      {
        title: "Clearance Process",
        description:
          "Employees must return company assets and complete all formalities before exit.",
      },
    ],
  },
];

const employeeHoildayMaster = {
  year: 2025,
  types: [
    {
      typeId: 1,
      name: "Public Holiday",
      color: "#E67E22",
    },
    {
      typeId: 2,
      name: "Festival",
      color: "#4CAF50",
    },
    {
      typeId: 3,
      name: "State Holiday",
      color: "#5C6BC0",
    },
  ],

  holidays: [
    {
      date: "2025-01-01",
      title: "New Year's Day",
      typeId: 1,
    },
    {
      date: "2025-01-26",
      title: "Republic Day",
      typeId: 1,
    },
    {
      date: "2025-03-14",
      title: "Holi",
      typeId: 2,
    },
    {
      date: "2025-04-02",
      title: "Ram Navami",
      typeId: 2,
    },
    {
      date: "2025-04-14",
      title: "Ambedkar Jayanti",
      typeId: 1,
    },
    {
      date: "2025-04-18",
      title: "Good Friday",
      typeId: 1,
    },
    {
      date: "2025-05-01",
      title: "Maharashtra Day",
      typeId: 3,
    },
    {
      date: "2025-08-15",
      title: "Independence Day",
      typeId: 1,
    },
    {
      date: "2025-10-02",
      title: "Gandhi Jayanti",
      typeId: 1,
    },
    {
      date: "2025-10-24",
      title: "Diwali",
      typeId: 2,
    },
    {
      date: "2025-11-14",
      title: "Diwali Holiday",
      typeId: 2,
    },
    {
      date: "2025-12-25",
      title: "Christmas Day",
      typeId: 1,
    },
  ],
};

const EmployeeHandbook = () => {
  const [isMobile, setIsMobile] = useState(false);

  useWindowDimension(() => setIsMobile(window.innerWidth < 768));

  const renderMain = () => {
    return (
      <div className={"right-container"}>
        <InputBox inputPlaceholder="Search within handbook…" />
        {employeeHandbookData.map((item, index) => (
          <EmployeeHandBookCard
            key={item.id}
            index={index}
            title={item.title}
            data={item.content}
          />
        ))}
        <Seperator name="Policy Acknowledgment" />
        <div className="ack-con">
          <div>
            <h3>{"Acknowledge This Document"}</h3>
            <p>
              {
                "By acknowledging, you confirm that you have read, understood, and agree to comply with all the policies outlined in this Employee Handbook."
              }
            </p>
          </div>
          <CheckBox
            data={[{ id: 1, value: "I have read and understood the Employee Handbook." }]}
          />
          <button className="base-button ack-btn">{"Acknowledge"}</button>
        </div>
      </div>
    );
  };
  const renderHoliday = (item: (typeof employeeHoildayMaster.holidays)[0]) => {
    const color = employeeHoildayMaster.types.find((ty) => ty.typeId === item.typeId)?.color ?? "";
    return (
      <div className="emp-hb-render-hoilday">
        <BadgeDot size={8} dotColor={color} />
        <p className="emp-hb-render-date">{format(new Date(item.date), "dd MMM")}</p>
        <div>
          <p className="emp-hb-render-title">{item.title}</p>
          <p className="emp-hb-render-day">{format(new Date(item.date), "EEEE")}</p>
        </div>
      </div>
    );
  };
  const renderHoildayType = (item: (typeof employeeHoildayMaster.types)[0]) => {
    return (
      <div className="emp-hb-render-hoilday-type">
        <BadgeDot size={8} dotColor={item.color} />
        <p className="emp-hb-hoilday-type-name">{item.name}</p>
      </div>
    );
  };
  const renderSideBar = () => {
    return (
      <SideBar
        title="Public Holidays-2026"
        leftTitle="Employee HandBook"
        rightTitle="Public Holiday"
        headerBackground="linear-gradient(135deg, #FFF8EE 0%, #F7F8FA 100%)"
        icon={calendar}
        showBottomBtn={true}
        renderBottom={() => {
          return (
            <button className="base-button mobile-bottom-btn">
              <DownloadIcon />
              Download PDF
            </button>
          );
        }}
      >
        <div className="emp-hn-hoilday-type-con">
          {employeeHoildayMaster.types.map(renderHoildayType)}
        </div>
        <div className="emp-hn-hoilday-con">
          {employeeHoildayMaster.holidays.map(renderHoliday)}
        </div>
      </SideBar>
    );
  };

  const renderTopButton = () => {
    return (
      <div className="d-flex gap-2 top-btn-con">
        <button className="base-outline-button top-out-btn">
          <PrintIcon />
          Print
        </button>
        <button className="base-button top-btn">
          <DownloadIcon />
          Download PDF
        </button>
      </div>
    );
  };

  return (
    <div className="max-width-screen">
      <div className="emp-tit-con">
        <Breadcrmb
          items={[
            { label: "Home", path: "/" },
            { label: "People Team", path: "/people-team" },
            { label: "Employee HandBook" },
          ]}
        />
        <TitleContainer titleFirst="Employee" titleLast="HandBook">
          {renderTopButton()}
        </TitleContainer>
      </div>
      <Container>
        {isMobile ? (
          <>
            <div className="emp-hb-top-btn">{renderTopButton()}</div>
            {renderSideBar()}
            {renderMain()}
          </>
        ) : (
          <>
            {renderMain()}
            {renderSideBar()}
          </>
        )}
      </Container>
    </div>
  );
};

export default EmployeeHandbook;
