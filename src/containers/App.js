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

export default class App extends Component {
  state = {
    items: [],
    ll: {},
    waitingPermission: true,
    locationError: false
  };

  fetchLocation = () => {
    getLocation()
      .then(position => {
        foursquare.venues
          .explore({
            ll: `${position.coords.latitude},${position.coords.longitude}`,
            categoryId: "4bf58dd8d48988d1e0931735",
            limit: 10,
            radius: 5000,
            sortByDistance: 1
          })
          .then(res => {
            console.log(res);
            this.setState({
              items: res.response.groups[0].items,
              waitingPermission: false,
              ll: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            });
          });
      })
      .catch(err => {
        console.error(err.message);
        this.setState({ waitingPermission: false, locationError: true });
      });
  };

  componentDidMount = () => {
    this.fetchLocation();
  };

  render() {
    // console.log(this.state.items);
    return (
      <div className={style.app}>
        <Header />
        {this.state.waitingPermission ? (
          <p>Loading...</p>
        ) : !this.state.locationError ? (
          <div className={style.appContent}>
            <Listing items={this.state.items} />
            <div style={{ width: "100%" }}>
              <Map
                userPosition={this.state.ll}
                marker={this.state.items}
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
        ) : (
          <p>It is necessary to allow your location in order to use App.</p>
        )}
      </div>
    );
  }
}
