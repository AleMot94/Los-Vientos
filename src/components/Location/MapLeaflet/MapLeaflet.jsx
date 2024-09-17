import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import "leaflet/dist/leaflet.css"

const markers = [
  {
    geocode: [-34.80549222964987, -58.400773458690026],
    popUp: "La Casa De Los Vientos"
  },
    {
    geocode: [-34.806445637152265, -58.39474421534425],
    popUp: "Mi Casa"
  }
]

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38] // size of the icon
});

const MapLeaflet = () => {
  return (
    <MapContainer center={[-34.80549222964987, -58.400773458690026]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.geocode} position={marker.geocode} icon={customIcon}>
          <Popup><h3>{marker.popUp}</h3></Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapLeaflet
