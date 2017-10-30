import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWithMarker = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "100%" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{
      lat: props.userPosition.lat,
      lng: props.userPosition.lng
    }}
  >
    <Marker
      position={{ lat: props.userPosition.lat, lng: props.userPosition.lng }}
      icon="http://icons.iconarchive.com/icons/icons8/windows-8/48/Maps-Street-View-icon.png"
    />

    {props.marker.map(item => {
      const lat = item.venue.location.lat;
      const lng = item.venue.location.lng;
      const id = item.venue.id;
      return <Marker key={id} position={{ lat, lng }} />;
    })}
  </GoogleMap>
));

export default MapWithMarker;
