import React from "react";
import { withRouter } from "react-router-dom";
import style from "./ListingItem.css";

const ListingItem = props => {
  const { venue } = props.item;
  return (
    <div to={venue.id} className={style.listingItem}>
      <div>
        <h3 onClick={() => props.history.push(`/details/${venue.id}`)}>
          {venue.name}
        </h3>
        <p>Distance {venue.location.distance} m</p>
        <p>
          Expensiveness - {venue.price.currency} - {venue.price.tier}
        </p>
      </div>
      {!props.item.hasOwnProperty("tips") ? (
        <p>no photo</p>
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

export default withRouter(ListingItem);
