import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '20%',
  margin: '50px',

  
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 35.2271,
         lng: -80.8431
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnYududkj5WuCUt7ToQILz9v-zFQzrPQs'
})(MapContainer);