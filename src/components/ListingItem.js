import React from "react";

import style from "./ListingItem.css";

const ListingItem = props => {
  return (
    <div className={style.listingItem}>
      <div>
        <p>{props.item.venue.name}</p>
        <p>{props.item.venue.location.distance}m</p>
      </div>
      {!props.item.hasOwnProperty("tips") ? (
        <p>no image</p>
      ) : props.item.tips[0].hasOwnProperty("photo") ? (
        <img
          src={`${props.item.tips[0].photo.prefix}100x100${props.item.tips[0]
            .photo.suffix}`}
          alt=""
        />
      ) : (
        <p>no photo</p>
      )}
    </div>
  );
};

export default ListingItem;
