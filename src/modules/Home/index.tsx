import Slider, { type Settings } from "react-slick";
import warning from "../../assets/warning.svg";
import rightArrow from "../../assets/rightArrow.svg";
import dummy_project1 from "../../assets/image/dummy_project1.png";
import dummy_project2 from "../../assets/image/dummy_project2.png";
import dummy_project3 from "../../assets/image/dummy_project3.png";
import "./styles.css";
import ProjectCard from "../../components/project-card";
import Map from "../../components/map";
import CalloutCard from "./components/callout-card";
import LatestAnnoucementCard from "./components/latest-annoucement-card";
import { useState } from "react";
import { useWindowDimension } from "../../hook";

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
const projectUpdates = [
  {
    projectId: 1,
    projectIcon: dummy_project1,
    status: "On Track",
    statusId: 101,
    lastUpdate: "20 Feb, 2026",
    projectName: "400 kV GIS Station for UPPTCL",
    location: {
      city: "Jaunpur",
      cityId: 201,
      state: "Uttar Pradesh",
      stateId: 301,
      country: "India",
      countryId: 401,
    },
    reportLink: "View Report",
  },
  {
    projectId: 2,
    projectIcon: dummy_project2,
    status: "Delayed",
    statusId: 102,
    lastUpdate: "15 Feb, 2026",
    projectName: "220/33 kV GIS Station for UPPTCL",
    location: {
      city: "Noida",
      cityId: 202,
      state: "Uttar Pradesh",
      stateId: 301,
      country: "India",
      countryId: 401,
    },
    reportLink: "View Report",
  },
  {
    projectId: 3,
    projectIcon: dummy_project3,
    status: "On Track",
    statusId: 101,
    lastUpdate: "18 Feb, 2026",
    projectName: "132 kV Substation for PGCIL",
    location: {
      city: "Lucknow",
      cityId: 203,
      state: "Uttar Pradesh",
      stateId: 301,
      country: "India",
      countryId: 401,
    },
    reportLink: "View Report",
  },
  {
    projectId: 4,
    projectIcon: dummy_project1,
    status: "Delayed",
    statusId: 102,
    lastUpdate: "10 Feb, 2026",
    projectName: "765 kV Transmission Line for PGCIL",
    location: {
      city: "Varanasi",
      cityId: 204,
      state: "Uttar Pradesh",
      stateId: 301,
      country: "India",
      countryId: 401,
    },
    reportLink: "View Report",
  },
  {
    projectId: 5,
    projectIcon: dummy_project2,
    status: "On Track",
    statusId: 101,
    lastUpdate: "22 Feb, 2026",
    projectName: "400 kV AIS Station for UPPTCL",
    location: {
      city: "Kanpur",
      cityId: 205,
      state: "Uttar Pradesh",
      stateId: 301,
      country: "India",
      countryId: 401,
    },
    reportLink: "View Report",
  },
  {
    projectId: 6,
    projectIcon: dummy_project3,
    status: "Delayed",
    statusId: 102,
    lastUpdate: "12 Feb, 2026",
    projectName: "220 kV Substation Expansion for UPPTCL",
    location: {
      city: "Ghaziabad",
      cityId: 206,
      state: "Uttar Pradesh",
      stateId: 301,
      country: "India",
      countryId: 401,
    },
    reportLink: "View Report",
  },
];

const sliderSettings: Settings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  easing: "ease-in-out",
  variableWidth: true,
  swipe: true,
  arrows: false,
};

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useWindowDimension(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  });
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
      <div className="latest-announcement">
        <div className="latest-announcement-title-block">
          <h2 className="latest-announcement-title">{"Latest Announcements"}</h2>
          <div className="latest-announcement-view-all">
            <span>View All</span>
            <img src={rightArrow} alt="right-arrow" />
          </div>
        </div>
        <div className="latest-anncoucement-container">
          {latestAnnouncement.map((item, index) => (
            <LatestAnnoucementCard
              key={index}
              date={item.date}
              department={item.department}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    );
  };

  const SliderCom = isMobile ? "div" : Slider;

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
      <div className="project-updates">
        <h2 className="project-updates-title">{"Weekly Project Updates"}</h2>
        <SliderCom
          {...sliderSettings}
          className={`${isMobile ? "mobile-scroll" : "custom-slider"}`}
        >
          {projectUpdates.map((item) => (
            <ProjectCard key={item.projectId} {...item} />
          ))}
        </SliderCom>
      </div>
      <Map />
    </div>
  );
};

export default Home;
