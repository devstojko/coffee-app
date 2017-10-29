import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import style from "./Map.css";

const myCurrLocation = "44.8186,20.4681";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: 44.8186, lng: 20.4681 }}>
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
