import React from "react";
import { withRouter } from "react-router-dom";
import style from "./ListingItem.css";

const ListingItem = props => {
  return (
    <div
      to={props.item.venue.id}
      className={style.listingItem}
      onClick={() => props.history.push(`/details/${props.item.venue.id}`)}
    >
      <div>
        <p>{props.item.venue.name}</p>
        <p>{props.item.venue.location.distance} m</p>
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
