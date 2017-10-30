import React from "react";

import ListingItem from "./ListingItem";

import style from "./Listing.css";

const Listing = props => {
  const renderItems = props.items.map(item => (
    <ListingItem key={item.venue.id} item={item} />
  ));

  const arrow = props.sortDist === "MAX" ? "↑" : "↓";
  const arrow1 = props.sortExpe === "MAX" ? "↑" : "↓";

  return (
    <div className={style.Listing}>
      <div className={style.ListingHeader}>
        <span>Sort by:</span>
        <button onClick={props.sortDistance}>Distance {arrow}</button>
        <button onClick={props.sortExpens}>Expensiveness {arrow1}</button>
      </div>
      <div className={style.ListingContent}>{renderItems}</div>
    </div>
  );
};

export default Listing;
