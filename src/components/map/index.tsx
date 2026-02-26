// components/IndiaMap.tsx
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { customIcon } from "../../utils/customIcon";
import "./styles.css";

const locations = [
  {
    id: 1,
    name: "400 kV GIS Station for UPPTCL",
    city: "Jaunpur, Uttar Pradesh",
    position: [25.7464, 82.6837],
    start: "12/03/2016",
    completion: "24/06/2022",
  },
  {
    id: 2,
    name: "Lucknow Substation",
    city: "Lucknow, Uttar Pradesh",
    position: [26.8467, 80.9462],
    start: "10/01/2018",
    completion: "12/05/2021",
  },
];

export default function Map() {
  return (
    <MapContainer center={[22.9734, 78.6569]} zoom={5} zoomControl={false} className="india-map">
      <ZoomControl position="bottomright" />
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />

      <MarkerClusterGroup chunkedLoading>
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.position as [number, number]} icon={customIcon}>
            <Popup>
              <div className="popup-card">
                <h3>{loc.name}</h3>
                <p>{loc.city}</p>
                <p>
                  <strong>Project Start:</strong> {loc.start}
                </p>
                <p>
                  <strong>Completion:</strong> {loc.completion}
                </p>
                <button className="details-btn">View more details</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
