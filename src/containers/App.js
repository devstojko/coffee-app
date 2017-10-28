import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Header from "../components/Header";
import Listing from "../components/Listing";
import Map from "../components/Map";

import style from "./App.css";

const foursquare = require("react-foursquare")({
  clientID: "Q0203EYLNNSJORXIRDT40X1UKPYTDI0CQ0MB0VT1WCFYT0Z3",
  clientSecret: "LZBHTB3GPV14Q15UV3PFBERVNHIBRWYCNZABEWGGUKAQKBQQ"
});

const params = {
  ll: "44.662628,20.8558253",
  categories: "coffee"
};

export default class App extends Component {
  state = {
    items: []
  };

  componentDidMount = () => {
    foursquare.venues.getVenues(params).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className={style.App}>
        <Header />
        <div className={style.AppContent}>
          <Listing />
          <Map />
        </div>
      </div>
    );
  }
}
