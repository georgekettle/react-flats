import React, { Component } from 'react';
import SimpleMap from './map.jsx';
import FlatList from './flat_list.jsx';
import Flat from './flat.jsx';

import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { flats: flats, selectedFlatLat:22, selectedFlatLng:55, mapCenter:{lat: 48.884211, lng: 2.34689} }
  }

  selectedFlat = (lat, lng) => {
    console.log(lat + ' ' + lng);
    this.setState({ selectedFlatLat:lat, selectedFlatLng:lng, mapCenter:{lat: lat, lng: lng} });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectedFlat={this.selectedFlat}/>
        <div className="map-container">
          <SimpleMap lat={this.state.selectedFlatLat} lng={this.state.selectedFlatLng} center={this.state.mapCenter} defaultCenter={this.props.defaultMapCenter}/>
        </div>
      </div>
    );
  }
}

export default App;
