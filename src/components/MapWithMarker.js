import React from "react";
import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import myLocationIcon from "../assets/icons/myLocationIcon.svg";

const keyAPI = "AIzaSyD20VEsdOtfZmtG30il5O2KTYPQk_SMNwc";
const mapURL = `https://maps.googleapis.com/maps/api/js?key=${keyAPI}&v=3.exp`;

const divEl = (
  <div
    style={{
      height: "100%"
    }}
  />
);

const MapWithMarker = compose(
  withProps({
    googleMapURL: mapURL,
    loadingElement: divEl,
    containerElement: divEl,
    mapElement: divEl
  }),
  withRouter,
  withScriptjs,
  withGoogleMap
)(props => {
  const { lat, lng } = props.userPosition;
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat,
        lng
      }}
    >
      <Marker
        position={{
          lat,
          lng
        }}
        icon={myLocationIcon}
      />
      {props.marker.map(item => {
        const { lat, lng, distance } = item.venue.location;
        const id = item.venue.id;

        return (
          <Marker
            key={id}
            position={{
              lat,
              lng
            }}
            onClick={() =>
              props.history.push({
                pathname: `/details/${id}`,
                state: distance
              })}
          />
        );
      })}
    </GoogleMap>
  );
});

export default MapWithMarker;
