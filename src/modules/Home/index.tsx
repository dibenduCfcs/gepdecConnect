import CalloutCard from "./components/callout-card";
import warning from "../../assets/warning.svg";
import "./styles.css";
import LatestAnnoucementCard from "./components/latest-annoucement-card";

const impNotice = [
  {
    noticeId: 1,
    priorityId: 1,
    priorityName: "Urgent",
    title: "Server Maintenance Downtime",
    description: "Expected outage on Saturday 2AM - 4AM EST.",
  },
  {
    noticeId: 2,
    priorityId: 2,
    priorityName: "Important",
    title: "Policy Update: Remote Work",
    description: "Guidelines for hybrid work schedule effective Mar 1st.",
  },
];

const latestAnnouncement = [
  {
    date: "Feb 18, 2026",
    department: "it",
    title: "New IT Security Protocol Implementation",
    description: "All employees must update their passwords by Frida",
  },
  {
    date: "Feb 18, 2026",
    department: "hr",
    title: "Q1 Town Hall Meeting Schedule",
    description: "Join us for the quarterly updates and awards.",
  },
  {
    date: "Feb 18, 2026",
    department: "facilities",
    title: "Office Renovation Update - 4th Floor",
    description: "The 4th floor pantry will be closed for maintenance.",
  },
];

const Home = () => {
  const getCalloutType = (priority: number) => {
    switch (priority) {
      case 1:
        return "callout-danger";
      case 2:
        return "callout-warning";
      default:
        return "callout-info";
    }
  };

  const renderLatestAnnouncement = () => {
    return (
      <div className="latest-anncoucement-container">
        {latestAnnouncement.map((item) => (
          <LatestAnnoucementCard
            date={item.date}
            department={item.department}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    );
  };

  const renderImpNotice = () => {
    return (
      <div className="imp-notice">
        <div className="imp-notice-title-block">
          <img src={warning} />
          <h2 className="imp-notice-title">{"Important Notices"}</h2>
        </div>
        <div className="imp-notice-container">
          {impNotice.map((item) => (
            <CalloutCard
              key={item.noticeId}
              priority={item.priorityName}
              title={item.title}
              description={item.description}
              type={getCalloutType(item.priorityId)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="home-container max-width-screen">
      <div className="home-annoucement-notice-container">
        {renderLatestAnnouncement()}
        {renderImpNotice()}
      </div>
    </div>
  );
};

export default Home;
