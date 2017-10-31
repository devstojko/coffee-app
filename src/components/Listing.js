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
            <p>Seems that all coffee shops are closed now..</p>
            <p>ZzZzZzZ....</p>
            <svg
              className={style.iconMoon}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        ) : (
          renderItems
        )}
      </div>
    </div>
  );
};

export default Listing;
