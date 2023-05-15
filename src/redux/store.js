import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/vehicleReducer';

const initialState = {
  vehicles: [
    { id: 1, name: 'Vehicle 1', status: 'Active', location: 'Dubai', latitude: 25.276987, longitude: 55.296249 },
    { id: 2, name: 'Vehicle 2', status: 'Inactive', location: 'Dubai', latitude: 25.1972, longitude: 55.2744 },
    // Add more vehicles as needed
  ],
  selectedVehicle: null,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
