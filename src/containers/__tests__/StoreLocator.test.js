// smoke test, test if the component can render without crashing
import React from 'react';
import ReactDOM from 'react-dom';
import StoreLocator from '../StoreLocator';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('StoreLocator tests', () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders without crashing', () => {
    //   const div = document.createElement('div');
    //   ReactDOM.render(<StoreLocator />, div);

    // shawllow rendering: isolate the component, without rendering it's child components,
    // using enzyme npm i --save-dev enzyme enzyme-adapter-react-16
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders 2 buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(3);
  });

  it('renders 1 map', () => {
    const map = mountedStoreLocator.find('Map');
    expect(map.length).toBe(1);
  });
});
