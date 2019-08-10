import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import styled from "styled-components";
import "./map.css";

// const Local = styled(Map)`
//   border: 1px solid blue;
//   width: 1vw;
//   height: 100%;
//   position: relative;
// `;

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        className="Map"
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.long
        }}
        zoom={18}
        onClick={this.onMapClicked}
      >
        <Marker
          title={this.props.name}
          onClick={this.onMarkerClick}
          name={"Current location"}
          position={{ lat: this.props.lat, lng: this.props.long }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.props.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDNrc3NcXQUhnFPdQ5GR8rMnmUHHHTn3wI"
})(Mapa);
