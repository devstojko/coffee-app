import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Header from "../components/Header";
import Listing from "../components/Listing";
import Map from "../components/Map";

import style from "./App.css";

export default class App extends Component {
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
