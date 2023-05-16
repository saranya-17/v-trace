import React from 'react';
import { shallow } from 'enzyme';
import { VehicleList } from '../components/VehicleList';

describe('VehicleList', () => {
  let wrapper;
  const mockSelectVehicle = jest.fn();

  const vehicles = [
    { id: 1, name: 'Vehicle 1' },
    { id: 2, name: 'Vehicle 2' },
    { id: 3, name: 'Vehicle 3' },
  ];

  beforeEach(() => {
    wrapper = shallow(<VehicleList vehicles={vehicles} selectVehicle={mockSelectVehicle} />);
  });

  it('should render the correct number of vehicles', () => {
    const vehicleItems = wrapper.find('.vehicle-item');
    expect(vehicleItems).toHaveLength(vehicles.length);
  });

  it('should call selectVehicle when a vehicle is clicked', () => {
    const vehicleItem = wrapper.find('.vehicle-item').first();
    vehicleItem.simulate('click');
    expect(mockSelectVehicle).toHaveBeenCalledWith(vehicles[0]);
  });

  it('should toggle the menu when the toggle button is clicked', () => {
    const toggleButton = wrapper.find('.toggle-button');
    toggleButton.simulate('click');

    // Menu should be closed
    expect(wrapper.find('.vehicle-list').hasClass('closed')).toBe(true);

    toggleButton.simulate('click');

    // Menu should be open
    expect(wrapper.find('.vehicle-list').hasClass('open')).toBe(true);
  });
});
