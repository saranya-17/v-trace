import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Map from './components/Map';
import VehicleList from './components/VehicleList';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <VehicleList />
        <Map />

      </div>
    </Provider>
  );
}

export default App;
