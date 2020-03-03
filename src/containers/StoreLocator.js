import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.stores = [
      { location: 'Portland', address: '123 Main st' },
      { location: 'Astoria', address: '333 Broad st' },
      { location: '', address: '' }
    ];
  }
  render() {
    let storeButtons = this.stores.map((store, id) => {
      return <Button key={id} location={store.location} />;
    });
    return (
      <div>
        <div>
          {/* <Button location="Portland" /> <Button location="Astoria" /> <Button /> */}
          {storeButtons}
        </div>
        <Map />
      </div>
    );
  }
}

export default StoreLocator;
