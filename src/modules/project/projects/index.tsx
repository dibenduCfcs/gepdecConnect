import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import Container from "../../../components/container";
import DropdownBox from "../../../components/dropdown-box";
import Filter from "../../../components/filter";
import InputBox from "../../../components/input-box";
import Label from "../../../components/label";
import ProjectCard from "../../../components/project-card";
import TitleContainer from "../../../components/title-con";
import { useIsMobileWindow } from "../../../hook";
import { projects, stateList } from "../../../static/data";
import "./styles.css";

const projectData = {
  totalProjects: {
    label: "Total Projects",
    value: 12,
  },
  ongoing: {
    label: "Ongoing",
    value: 3,
  },
  completed: {
    label: "Completed",
    value: 3,
  },
  onhold: {
    label: "On Hold",
    value: 3,
  },
};

const Project = () => {
  const isMobile = useIsMobileWindow();
  const renderKPICard = (
    title: string,
    value: number,
    backgroundColor: string,
    borderColor: string,
    color: string,
  ) => {
    return (
      <div className="pro-kpi-card-con" style={{ backgroundColor, borderColor }}>
        <p className="pro-kpi-title">{title}</p>
        <h3 className="pro-kpi-value" style={{ color }}>
          {value}
        </h3>
      </div>
    );
  };
  const renderKPINavBar = () => {
    return (
      <div className="pro-kpi-container">
        {renderKPICard(
          projectData.totalProjects.label,
          projectData.totalProjects.value,
          "#FFF4E5",
          "#F5D9B0",
          "#E98C20",
        )}
        {renderKPICard(
          projectData.ongoing.label,
          projectData.ongoing.value,
          "#FFF4E5",
          "#F5D9B0",
          "#E98C20",
        )}
        {renderKPICard(
          projectData.completed.label,
          projectData.completed.value,
          "#EDFAE5",
          "#C5E8B0",
          "#3D8A1E",
        )}
        {renderKPICard(
          projectData.onhold.label,
          projectData.onhold.value,
          "#F3F4F6",
          "#D1D5DB",
          "#62748E",
        )}
      </div>
    );
  };
  return (
    <div className="max-width-screen">
      <Breadcrmb items={[{ label: "Home", path: "/" }, { label: "Project" }]} />
      <TitleContainer titleFirst="Projects" titleLast="Overview" className="pro-ttl-con">
        {renderKPINavBar()}
      </TitleContainer>
      <Container flexDirection="column">
        <Filter buttonText="Filter" leftTitle="Projects Overview" isHeaderVisible>
          <Label title="Search" className="pro-search" color="#62748E">
            <InputBox inputPlaceholder="Project name, client, code…" />
          </Label>
          <Label title="State" className="pro-dropdown" color="#62748E">
            <DropdownBox options={stateList} placeholder="Select State" />
          </Label>
          <Label title="Status" className="pro-dropdown" color="#62748E">
            <DropdownBox options={[]} placeholder="Select Status" />
          </Label>
          <Label title="Project Type" className="pro-dropdown" color="#62748E">
            <DropdownBox options={[]} placeholder="Select Project Type" />
          </Label>
        </Filter>
        {isMobile && renderKPINavBar()}
        <div className="right-container w-100">
          <div className="pro-list-container">
            {projects.map((project) => (
              <ProjectCard key={project.projectId} {...project} cardType="project" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
