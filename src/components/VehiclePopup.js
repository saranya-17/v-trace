import React from 'react';

const VehiclePopup = ({ selectedVehicle }) => {
  return (
    <div>
      <h3>{selectedVehicle.name}</h3>
      <p>Status: {selectedVehicle.status}</p>
    </div>
  );
};

export default VehiclePopup;
