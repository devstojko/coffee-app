import React from "react";

import ListingItem from "./ListingItem";

import style from "./Listing.css";

const Listing = props => {
  const renderItems = props.items.map(item => (
    <ListingItem key={item.venue.id} item={item} />
  ));

  console.log(renderItems);

  const arrow = props.sortDist === "MAX" ? "↑" : "↓";
  const arrow1 = props.sortExpe === "MAX" ? "↑" : "↓";

  return (
    <div className={style.listing}>
      <div className={style.header}>
        <span>CoffeeApp</span>
        <span>
          <button className={style.sortBtn} onClick={props.sortDistance}>
            Distance {arrow}
          </button>
          <button className={style.sortBtn} onClick={props.sortExpens}>
            Expensiveness {arrow1}
          </button>
        </span>
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
