import React from "react";

import ListingItem from "./ListingItem";

import style from "./Listing.css";

const Listing = props => {
  const renderItems = props.items.map(item => (
    <ListingItem key={item.venue.id} item={item} />
  ));

  const arowDirection = type => (type === "MAX" ? "↑" : "↓");

  return (
    <div className={style.listing}>
      <div className={style.header}>
        <span>CoffeeApp</span>
        {renderItems.length !== 0 ? (
          <span>
            <button
              className={style.sortBtn}
              onClick={() => props.handleSort("dist")}
            >
              Distance {arowDirection(props.sortArrow.dist)}
            </button>
            <button
              className={style.sortBtn}
              onClick={() => props.handleSort("expe")}
            >
              Expensiveness {arowDirection(props.sortArrow.expe)}
            </button>
          </span>
        ) : (
          undefined
        )}
      </div>
      <div className={style.content}>
        {renderItems.length === 0 ? (
          <div className={style.iconBox}>
            <p>
              Can't find coffee shops near your location. Take a walk and try
              again and keep in mind that maybe it is a time for sleeping.
            </p>
          </div>
        ) : (
          renderItems
        )}
      </div>
    </div>
  );
};

export default Listing;
