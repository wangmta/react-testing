import React, { Component } from 'react';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.png',
      stores: []
    };
    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/data/stores.json');
    this.setState({ stores: response.data.stores });
  }

  chooseMap(event) {
    this.setState({ currentMap: mapChooser(event.target.value) });
  }

  render() {
    let storeButtons = this.state.stores.map((store, id) => {
      return <Button key={id} location={store.location} handleClick={this.chooseMap} />;
    });
    return (
      <div>
        <div>
          {/* <Button location="Portland" /> <Button location="Astoria" /> <Button /> */}
          {storeButtons}
        </div>
        <Map imagename={this.state.currentMap} location={this.props.location} />
      </div>
    );
  }
}

export default StoreLocator;
