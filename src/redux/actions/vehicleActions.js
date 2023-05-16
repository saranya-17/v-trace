import { FETCH_VEHICLES, SELECT_VEHICLE } from '../types';

export const fetchVehicleData = () => {
  // Simulated asynchronous fetch
  return (dispatch) => {
    setTimeout(() => {
      const vehicles = [
            { id: 1, name: 'Vehicle 1', status: 'Active', location: 'Dubai', latitude: 25.0756584, longitude: 54.8978302 },
            { id: 2, name: 'Vehicle 2', status: 'Inactive', location: 'Sharjah', latitude: 25.3195853, longitude: 55.3806272 },
            { id: 3, name: 'Vehicle 3', status: 'Inactive', location: 'Dubai International Airport', latitude: 25.2531745, longitude: 55.3630979 },
      ]
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
