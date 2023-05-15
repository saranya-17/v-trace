import { combineReducers } from 'redux';
import { FETCH_VEHICLES, SELECT_VEHICLE } from '../types';

const vehiclesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return action.payload;
    default:
      return state;
  }
};

const selectedVehicleReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_VEHICLE:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
  selectedVehicle: selectedVehicleReducer,
});

export default rootReducer;
