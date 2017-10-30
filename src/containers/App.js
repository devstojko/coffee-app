import React, { Component } from "react";
import { Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import Header from "../components/Header";
import Listing from "../components/Listing";
import MapWithMarker from "../components/MapWithMarker";

import getLocation from "../utils/geolocationAPI";
import style from "./App.css";

const foursquare = require("react-foursquare")({
  clientID: "Q0203EYLNNSJORXIRDT40X1UKPYTDI0CQ0MB0VT1WCFYT0Z3",
  clientSecret: "LZBHTB3GPV14Q15UV3PFBERVNHIBRWYCNZABEWGGUKAQKBQQ"
});

function ErrorMessage() {
  return <h2>Allow Application to use your location.</h2>;
}

class App extends Component {
  state = {
    items: [],
    ll: {},
    waitingGeoPermission: true,
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
            console.log(res.response.groups[0].items);
            this.setState({
              items: res.response.groups[0].items,
              waitingGeoPermission: false,
              ll: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            });
          });
      })
      .catch(err => {
        console.error(err.message);
        this.props.history.push("/error");
        // this.setState({ waitingGeoPermission: false, locationError: true });
      });
  };

  componentDidMount = () => {
    this.fetchLocation();
  };

  render() {
    // console.log(this.state.items);
    return (
      <div className={style.App}>
        {!this.state.waitingGeoPermission && (
          <div className={style.AppContent}>
            <Listing items={this.state.items} />
            <div style={{ width: "100%" }}>
              <MapWithMarker
                userPosition={this.state.ll}
                marker={this.state.items}
              />
            </div>
          </div>
        )}

        <Route path="/error" component={ErrorMessage} />
      </div>
    );
  }
}

export default withRouter(App);
