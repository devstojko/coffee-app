import React from "react";

import ListingItem from "./ListingItem";

import style from "./Listing.css";

const Listing = props => {
  const renderItems = props.items.map(item => (
    <ListingItem key={item.venue.id} item={item} />
  ));

  return (
    <div className={style.Listing}>
      <div className={style.ListingHeader}>sort components</div>
      <div className={style.ListingContent}>{renderItems}</div>
    </div>
  );
};

export default Listing;
