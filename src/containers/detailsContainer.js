import React, { Component } from "react";

import { foursquare, foursquareParams } from "../utils/foursquareAPI";

import DetailsItem from "../components/DetailsItem";

export default class detailsContainer extends Component {
  state = {
    lodaedVenue: null
  };

  componentDidMount = () => {
    this.fetchData();
  };

  componentDidUpdate = () => {
    this.fetchData();
  };

  fetchData = () => {
    if (this.props.match.params.id) {
      if (
        !this.state.lodaedVenue ||
        (this.state.lodaedVenue &&
          this.state.lodaedVenue.venue.id !== this.props.match.params.id)
      ) {
        foursquare.venues
          .getVenue({
            venue_id: this.props.match.params.id
          })
          .then(res => {
            this.setState({ lodaedVenue: res.response });
          });
      }
    }
  };

  render() {
    let venue = <p>select</p>;
    if (this.props.match.params.id) {
      venue = <p>loading</p>;
    }

    if (this.state.lodaedVenue) {
      venue = <DetailsItem item={this.state.lodaedVenue} />;
    }

    return venue;
  }
}
