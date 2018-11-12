import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map_marker.jsx';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    console.log("RENDERING MAP")
  }

  renderMapMarker = () => {
    console.log("render map marker")
    if (this.props.lng && this.props.lat) {
      return <MapMarker lat={this.props.lat} lng={this.props.lng}/>
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.defaultCenter}
          center={this.props.center}
          defaultZoom={11}
        >
          <MapMarker lat={this.props.lat} lng={this.props.lng}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
