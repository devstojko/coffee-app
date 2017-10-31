import React from "react";
import { withRouter } from "react-router-dom";
import formatedPrice from "../utils/formatedPrice";

import style from "./ListingItem.css";

const ListingItem = props => {
  const { venue } = props.item;
  return (
    <div to={venue.id} className={style.item}>
      {!props.item.hasOwnProperty("tips") ? (
        <span className={style.emptyImg}>Ø</span>
      ) : props.item.tips[0].hasOwnProperty("photo") ? (
        <img
          src={`${props.item.tips[0].photo.prefix}100x100${props.item.tips[0]
            .photo.suffix}`}
          alt=""
          className={style.img}
        />
      ) : (
        <span className={style.emptyImg}>Ø</span>
      )}
      <div className={style.content}>
        <h3
          className={style.title}
          onClick={() =>
            props.history.push({
              pathname: `/details/${venue.id}`,
              state: venue.location.distance
            })}
        >
          {venue.name}
        </h3>
        <div className={style.info}>
          <p>Distance {venue.location.distance} m</p>
          <p>Expensiveness - {formatedPrice(venue.price.tier)}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ListingItem);
