import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Header from "../components/Header";

import css from "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
