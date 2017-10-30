import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MapWithMarker from "../components/MapWithMarker";
import Listing from "../components/Listing";

import { foursquare, foursquareParams } from "../utils/foursquareAPI";
import getLocation from "../utils/geolocationApi";

import style from "../components/App.css";

export default class appContainer extends Component {
  state = {
    items: [],
    ll: {},
    sortDist: "MAX",
    sortExpe: "MAX",
    waitingGeoPermission: true
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    getLocation()
      .then(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        foursquare.venues
          .explore({
            ll: `${lat},${lng}`,
            ...foursquareParams
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

  handleDistanceSort = () => {
    const { sortDist } = this.state;
    const sortDirReverse = sortDist === "MAX" ? "MIN" : "MAX";
    const items = this.state.items.sort((a, b) => {
      const valA = a.venue.location.distance;
      const valB = b.venue.location.distance;

      if (sortDist === "MAX") {
        return valB - valA;
      } else {
        return valA - valB;
      }
    });

    this.setState({
      items,
      sortDist: sortDirReverse
    });
  };

  handleExpensSort = () => {
    const { sortExpe } = this.state;
    const sortDirReverse = sortExpe === "MAX" ? "MIN" : "MAX";
    const items = this.state.items.sort((a, b) => {
      const valA = a.venue.price.tier;
      const valB = b.venue.price.tier;

      if (sortExpe === "MAX") {
        return valB - valA;
      } else {
        return valA - valB;
      }
    });

    this.setState({
      items,
      sortExpe: sortDirReverse
    });
  };

  render() {
    return (
      <div className={style.App}>
        {!this.state.waitingGeoPermission && (
          <div className={style.AppContent}>
            <Listing
              items={this.state.items}
              sortDistance={this.handleDistanceSort}
              sortExpens={this.handleExpensSort}
              sortDist={this.state.sortDist}
              sortExpe={this.state.sortExpe}
            />
            <div style={{ width: "100%" }}>
              <MapWithMarker
                userPosition={this.state.ll}
                marker={this.state.items}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
