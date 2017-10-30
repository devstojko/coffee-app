import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MapWithMarker from "../components/MapWithMarker";
import Listing from "../components/Listing";
import detailsContainer from "../containers/detailsContainer";

import { foursquare, foursquareOptions } from "../utils/foursquareAPI";
import getLocation from "../utils/geolocationApi";
import PropsRoute from "../utils/PropsRoute";

import style from "../components/App.css";

export default class appContainer extends Component {
  state = {
    items: [],
    ll: {},
    waitingGeoPermission: true
  };

  fetchData = () => {
    getLocation()
      .then(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        foursquare.venues
          .explore({
            ll: `${lat},${lng}`,
            ...foursquareOptions
          })
          .then(res => {
            this.setState({
              items: res.response.groups[0].items,
              waitingGeoPermission: false,
              ll: { lat, lng }
            });
          });
      })
      .catch(err => {
        this.props.history.push("/error");
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div className={style.App}>
        {!this.state.waitingGeoPermission && (
          <div className={style.AppContent}>
            <Listing items={this.state.items} />
            <Switch>
              <Route
                path="/map"
                exact
                render={() => {
                  return (
                    <div style={{ width: "100%" }}>
                      <MapWithMarker
                        userPosition={this.state.ll}
                        marker={this.state.items}
                      />
                    </div>
                  );
                }}
              />
              <PropsRoute
                path="/details/:id"
                exact
                component={detailsContainer}
                details={this.state.items}
              />
              <Redirect from="/" to="/map" />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}
