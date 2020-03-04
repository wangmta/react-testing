import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

import { render, cleanup } from '@testing-library/react';
import jestDOM from '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

describe('Button', () => {
  // clean up the instances so the testId will be unique
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="i'm the button label." />);
    expect(getByTestId('button')).toHaveTextContent("i'm the button label.");
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="save" />);
    expect(getByTestId('button')).toHaveTextContent('save');
  });

  it('matches snapshot', () => {
    //create snapshot when first run
    const tree = renderer.create(<Button label="save" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
