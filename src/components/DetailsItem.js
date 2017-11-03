import React from "react";
import { withRouter } from "react-router-dom";
import Zmage from "react-zmage";

import TipItem from "./TipItem";
import formatedPrice from "../utils/formatedPrice.js";

import style from "./DetailsItem.css";

function DetailsItem(props) {
  const { venue } = props.item;

  const photos =
    venue.photos.groups[0] !== undefined
      ? venue.photos.groups[0].items.map(photo => ({
          src: `${photo.prefix}300x300${photo.suffix}`,
          alt: `${photo.source.name}`,
          text: `${photo.source.name}`
        }))
      : undefined;

  const tips =
    venue.tips.groups[0] !== undefined
      ? venue.tips.groups[0].items.filter(tip => {
          return tip.text.includes("coffee");
        })
      : undefined;

  return (
    <div className={style.item}>
      <button
        className={style.closeBtn}
        onClick={() => props.history.push("/")}
      >
        ←
      </button>

      <div className={style.content}>
        {photos && (
          <div className={style.imageBox}>
            <Zmage
              className={style.image}
              src={photos[0].src}
              alt={photos[0].alt}
              text={photos[0].text}
              imageSet={photos}
            />
          </div>
        )}
        <div className={style.header}>
          <h2 className={style.title}>{venue.name}</h2>
          <p>Distance {props.location.state} m</p>
          <p>{formatedPrice(venue.price.tier)}</p>
        </div>
        <div className={style.tips}>
          {tips.map(tip => <TipItem key={tip.id} item={tip} />)}
        </div>
      </div>
    </div>
  );
}

export default withRouter(DetailsItem);
