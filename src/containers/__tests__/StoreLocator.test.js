// smoke test, test if the component can render without crashing
import React from 'react';
import StoreLocator from '../StoreLocator';
import { shallow } from 'enzyme';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('StoreLocator tests', () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it('calls axios.get with correct url', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/stores.json');
      });
  });

  it('updates state with api data', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedStoreLocator.state()).toHaveProperty('stores', [
          { location: 'test location', address: 'test address' }
        ]);
      });
  });

  it('renders 1 button after calling api', () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        const buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(1);
      });
  });

  it('renders without crashing', () => {
    //   const div = document.createElement('div');
    //   ReactDOM.render(<StoreLocator />, div);

    // shawllow rendering: isolate the component, without rendering it's child components,
    // using enzyme npm i --save-dev enzyme enzyme-adapter-react-16
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  // it('renders 3 buttons', () => {
  //   const buttons = mountedStoreLocator.find('Button');
  //   expect(buttons.length).toBe(3);
  // });

  it('renders 1 map', () => {
    const map = mountedStoreLocator.find('Map');
    expect(map.length).toBe(1);
  });
});

describe('chooseMap', () => {
  it('updates this.state.currentMap using the location passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: 'testland' } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
  });
});
