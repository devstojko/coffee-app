import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Header from "../components/Header";
import Listing from "../components/Listing";
import Map from "../components/Map";

import getLocation from "../utils/geolocationAPI";

import style from "./App.css";

const foursquare = require("react-foursquare")({
  clientID: "Q0203EYLNNSJORXIRDT40X1UKPYTDI0CQ0MB0VT1WCFYT0Z3",
  clientSecret: "LZBHTB3GPV14Q15UV3PFBERVNHIBRWYCNZABEWGGUKAQKBQQ"
});

const myCurrLocation = "44.6632695,20.935169";

const params = {
  ll: myCurrLocation,
  categoryId: "4bf58dd8d48988d1e0931735",
  limit: 10,
  radius: 1000
};

export default class App extends Component {
  state = {
    items: []
  };

  componentDidMount = () => {
    getLocation();
    foursquare.venues.explore(params).then(res => {
      console.log(res.response.groups[0].items[0]);
      this.setState({ items: res.response.groups[0].items });
    });
  };

  showLocation = () => {
    getLocation();
  };

  render() {
    // console.log(this.state.items);
    return (
      <div className={style.app}>
        <Header />
        <div className={style.appContent}>
          <Listing items={this.state.items} />
          <div style={{ width: "100%" }}>
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={
                <div
                  style={{
                    height: `100%`
                  }}
                />
              }
              containerElement={
                <div
                  style={{
                    height: `100%`
                  }}
                />
              }
              mapElement={
                <div
                  style={{
                    height: `100%`
                  }}
                />
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
