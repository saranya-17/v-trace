import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchVehicleData, selectVehicle } from '../redux/actions/vehicleActions';
import VehicleListItem from './VehicleListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const VehicleList = ({ vehicles, fetchVehicleData, selectVehicle }) => {
  const [isOpen, setIsOpen] = useState(true); // State for menu open/close
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch vehicle data on component mount
    fetchVehicleData();
  }, [fetchVehicleData]);

  const handleVehicleSelect = (vehicleId) => {
    selectVehicle(vehicleId);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`vehicle-list ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&#9656;</span> : <span>&#9662;</span>}
      </div>
      {isOpen ?
      <>
      <div className="search-bar">
        <div className="search-input">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" onChange={handleSearch} />
        </div>
      </div>
      <ul>
      {filteredVehicles.map((vehicle) => (
          <li key={vehicle.id} className="vehicle-item" onClick={() => handleVehicleSelect(vehicle.id)}>
            {vehicle.name}
          </li>
        ))}
      </ul>
      </>
      :''}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
  };
};

export default connect(mapStateToProps, { fetchVehicleData, selectVehicle })(VehicleList);
