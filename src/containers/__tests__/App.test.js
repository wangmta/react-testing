import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

// create a test suite
describe('App Test', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    let mountedApp = shallow(<App />);
  });

  it('renders a StoreLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });
});
