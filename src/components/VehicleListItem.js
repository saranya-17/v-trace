import React from 'react';
import { connect } from 'react-redux';
import { selectVehicle } from '../redux/actions/vehicleActions';

const VehicleListItem = ({ vehicle, onSelect }) => {
  const handleClick = () => {
    onSelect(vehicle);
  };

  return (
    <li onClick={handleClick}>
      <h3>{vehicle.name}</h3>
      <p>Status: {vehicle.status}</p>
      <p>Location: {vehicle.location}</p>
    </li>
  );
};

export default connect(null, { selectVehicle })(VehicleListItem);
