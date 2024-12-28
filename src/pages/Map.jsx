import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "leaflet";
import { clearRoute } from "../redux/slices/infoSlice";
const Map = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flight);
  const { route } = useSelector((store) => store.info);
  const dispatch = useDispatch();

  //marker için icon olusturma
  const planeIcon = icon({
    iconUrl: "plane_icon.png",
    iconSize: [30, 30],
    popupAnchor: [-3, -46],
  });

  return (
    <MapContainer center={[40.197953, 32.412556]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <Marker icon={planeIcon} key={flight.id} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className="popup">
              <span>Kod: {flight.code}</span>
              <button onClick={() => setDetailId(flight?.id)}>Detail</button>
              <button onClick={() => dispatch(clearRoute())}>Clear Route</button>
            </div>
          </Popup>
        </Marker>
      ))}

      {route && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
