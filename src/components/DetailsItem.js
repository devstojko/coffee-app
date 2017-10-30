import React from "react";
import { withRouter } from "react-router-dom";
import Zmage from "react-zmage";
function DetailsItem(props) {
  const { venue } = props.item;
  console.log(venue)
  const photos = venue.photos.groups[0].items.map(photo => ({
    src: `${photo.prefix}300x300${photo.suffix}`,
    alt: `${photo.source.name}`,
    text: `${photo.source.name}`
  }));

  return (
    <div>
      <p>{venue.name}</p>
      <p>Distance {venue.location.distance} m</p>
      <button onClick={() => props.history.push("/")}>X</button>
      <Zmage
        src={photos[0].src}
        alt={photos[0].alt}
        text={photos[0].text}
        imageSet={photos}
      />
    </div>
  );
}

export default withRouter(DetailsItem);
