import { FETCH_VEHICLES, SELECT_VEHICLE } from '../types';

export const fetchVehicleData = () => {
  // Simulated asynchronous fetch
  return (dispatch) => {
    setTimeout(() => {
      const vehicles = [
        { id: 1, name: 'Vehicle 1', status: 'Active', location: 'Location 1' },
        { id: 2, name: 'Vehicle 2', status: 'Inactive', location: 'Location 2' },
        // Add more vehicles as needed
      ];
      dispatch({
        type: FETCH_VEHICLES,
        payload: vehicles,
      });
    }, 1000);
  };
};

export const selectVehicle = (vehicleId) => {
  return {
    type: SELECT_VEHICLE,
    payload: vehicleId,
  };
};
