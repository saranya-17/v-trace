import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/vehicleReducer';

const initialState = {
  vehicles: [
    { id: 1, name: 'Vehicle 1', status: 'Active', location: 'Dubai', latitude: 25.0756584, longitude: 54.8978302 },
    { id: 2, name: 'Vehicle 2', status: 'Inactive', location: 'Sharjah', latitude: 25.3195853, longitude: 55.3806272 },
    { id: 2, name: 'Vehicle 3', status: 'Inactive', location: 'Dubai International Airport', latitude: 25.2531745, longitude: 55.3630979 },
    // Add more vehicles as needed
  ],
  selectedVehicle: null,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
