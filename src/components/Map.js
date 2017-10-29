import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  MarkerWithLabel
} from "react-google-maps";
import style from "./Map.css";

const Map = withScriptjs(
  withGoogleMap(props => (
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

      {props.isMarkerShown &&
        props.marker.map(item => {
          const lat = item.venue.location.lat;
          const lng = item.venue.location.lng;
          const id = item.venue.id;
          return <Marker key={id} position={{ lat, lng }} />;
        })}
    </GoogleMap>
  ))
);

export default Map;
