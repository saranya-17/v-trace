import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchVehicleData, selectVehicle } from '../redux/actions/vehicleActions';
import VehicleListItem from './VehicleListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const VehicleList = ({ vehicles, fetchVehicleData, selectVehicle }) => {
  const [isOpen, setIsOpen] = useState(true); // State for menu open/close

  useEffect(() => {
    // Fetch vehicle data on component mount
    fetchVehicleData();
  }, [fetchVehicleData]);

  const handleVehicleSelect = (vehicleId) => {
    selectVehicle(vehicleId);
  };

  return (
    <div className={`vehicle-list ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&#9656;</span> : <span>&#9662;</span>}
      </div>
      <h2>Vehicle List</h2>
      <div className="search-bar">
        <div className="search-input">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <ul className={isOpen ? 'show' : 'hide'}>
        {vehicles.map((vehicle) => (
          <VehicleListItem
            key={vehicle.id}
            vehicle={vehicle}
            onSelect={handleVehicleSelect}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
  };
};

export default connect(mapStateToProps, { fetchVehicleData, selectVehicle })(VehicleList);
