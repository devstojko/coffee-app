import React from "react";

const ListingItem = props => {
  return (
    <div>
      <span>{props.item.venue.name}</span>
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
