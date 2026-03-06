import Breadcrmb from "../../../components/breadcrmb/Breadcrmb";
import Container from "../../../components/container";
import DropdownBox from "../../../components/dropdown-box";
import FilterSortBar from "../../../components/filter-sort-bar";
import InputBox from "../../../components/input-box";
import Label from "../../../components/label";
import SideBar from "../../../components/sidebar";
import TitleContainer from "../../../components/title-con";
import GuestHousesCard from "../components/guest-houses-card";

const GuestHouses = () => {
  return (
    <div className="max-width-screen">
      <Breadcrmb
        items={[
          { label: "Home", path: "/" },
          { label: "Projects", path: "/projects" },
          { label: "Guest Houses" },
        ]}
      />
      <TitleContainer titleFirst="Guest" titleLast="Houses" />
      <Container>
        <SideBar leftTitle="Guest Houses" title="Filter Guest Houses">
          <Label title="Search" textTransform="uppercase" color="#62748E">
            <InputBox />
          </Label>
          <Label title="Project" textTransform="uppercase" color="#62748E">
            <DropdownBox options={[]} placeholder="Select Project" />
          </Label>
          <Label title="State" textTransform="uppercase" color="#62748E">
            <DropdownBox options={[]} placeholder="Select State" />
          </Label>
        </SideBar>
        <div className="right-container">
          <FilterSortBar count={8} totalCount={8} sortByName={"Newest First"} />
          <div className="anc-list-container">
            <GuestHousesCard />
            <GuestHousesCard />
            <GuestHousesCard />
            <GuestHousesCard />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default GuestHouses;
