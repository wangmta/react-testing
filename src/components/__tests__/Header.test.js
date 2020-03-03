import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Header />, div);
    mountedHeader = shallow(<Header />);
  });

  it('renders a gradient', () => {
    const gradientImg = mountedHeader.find('img[src="images/gradient1.jpg"]');
    expect(gradientImg.length).toBe(1);
  });
});
