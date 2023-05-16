import React from 'react';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';


const Map = ({ vehicles, selectedVehicle }) => {
  const defaultPosition = [25.2048, 55.2708]; // Default center position in Dubai

  return (
    <div className="map-container">
      <MapContainer center={defaultPosition} zoom={10} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
        />

        {vehicles.map((vehicle) => (
          <Marker key={vehicle.id} position={[vehicle.latitude, vehicle.longitude]}>
            <Popup>
              <div>
                <h3>{vehicle.name}</h3>
                <p>Status: {vehicle.status}</p>
                <p>Location: {vehicle.location}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {selectedVehicle && (
          <Marker position={[selectedVehicle.latitude, selectedVehicle.longitude]}>
            <Popup>
              <div>
                <h3>Selected Vehicle</h3>
                <p>Name: {selectedVehicle.name}</p>
                <p>Status: {selectedVehicle.status}</p>
                <p>Location: {selectedVehicle.location}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
    selectedVehicle: state.selectedVehicle,
  };
};

export default connect(mapStateToProps)(Map);
