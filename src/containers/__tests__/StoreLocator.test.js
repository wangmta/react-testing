// smoke test, test if the component can render without crashing
import React from 'react';
import ReactDOM from 'react-dom';
import StoreLocator from '../StoreLocator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreLocator />, div);
});
