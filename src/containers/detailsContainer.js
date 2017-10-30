import React, { Component } from "react";

import DetailsItem from "../components/DetailsItem";

export default class detailsContainer extends Component {
  state = {
    items: [...this.props.details]
  };

  getDetails = () => {
    const match = this.props.match.params.id;

    const item = this.state.items.filter(el => el.venue.id === match);

    return item;
  };

  componentDidMount() {
    this.getDetails();
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.getDetails();
  };

  render() {
    const item = this.getDetails();

    return <DetailsItem item={item} />;
  }
}
