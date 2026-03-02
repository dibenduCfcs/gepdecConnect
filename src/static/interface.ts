export interface NavItem {
  id: number;
  label: string;
  hasArrow?: boolean;
  route: string;
}

export interface IdValue {
  id: number;
  value: string;
}

export interface ProjectProps {
  projectId: number;
  projectIcon: string;
  status: string;
  statusId: number;
  lastUpdate: string;
  projectName: string;

  location: {
    city: string;
    cityId: number;
    state: string;
    stateId: number;
    country: string;
    countryId: number;
  };

  reportLink: string;
  image: string;
  voltage: string;
  voltageLevel: number;
  category: string;
  categoryId: number;
  client: string;
  clientId: number;
  projectCode: string;
  duration: {
    startDate: string;
    endDate: string;
  };
  tags: string[];
  isOngoing: boolean;
  latestPhotoLabel: string;
}
