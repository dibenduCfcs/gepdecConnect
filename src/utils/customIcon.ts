import L from "leaflet";

export const customIcon = new L.Icon({
  iconUrl: "/marker.png", // place marker image inside public folder
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -40],
});
