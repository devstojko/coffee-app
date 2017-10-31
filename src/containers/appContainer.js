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
    sort: { dist: "MAX", expe: "MAX" },
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

        // for testing
        // const lat = 44.664289;
        // const lng = 20.924086;

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

  handleSort = type => {
    const { sort } = this.state;
    const sortReverse = sort[type] === "MAX" ? "MIN" : "MAX";

    const items = this.state.items.sort((a, b) => {
      let valA;
      let valB;

      if (type === "dist") {
        valA = a.venue.location.distance;
        valB = b.venue.location.distance;
      } else if (type === "expe") {
        valA = a.venue.price.tier;
        valB = b.venue.price.tier;
      }

      if (sort[type] === "MAX") {
        return valB - valA;
      } else {
        return valA - valB;
      }
    });

    this.setState({
      items,
      sort: {
        ...sort,
        [type]: sortReverse
      }
    });
  };

  render() {
    return (
      <div className={style.App}>
        {!this.state.waitingGeoPermission && (
          <div className={style.AppContent}>
            <Listing
              items={this.state.items}
              handleSort={this.handleSort}
              sortArrow={this.state.sort}
            />
            <div className={style.MapWrapper}>
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
