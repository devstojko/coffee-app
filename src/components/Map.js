import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import style from "./Map.css";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 44.662628, lng: 20.8558253 }}
    >
      {props.isMarkerShown && (
        <div>
          <Marker
            position={{ lat: 44.666060696242575, lng: 20.922874570200054 }}
          />
          <Marker
            position={{ lat: 44.665924901964274, lng: 20.923085525626245 }}
          />
        </div>
      )}
    </GoogleMap>
  ))
);

export default Map;
