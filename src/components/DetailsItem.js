import React from "react";
import { withRouter } from "react-router-dom";
function DetailsItem(props) {
  console.log(props.item[0]);

  return (
    <div>
      <p>{props.item[0].venue.name}</p>
      <p>{props.item[0].venue.location.distance} m</p>
      <button onClick={() => props.history.push("/")}>X</button>
    </div>
  );
}

export default withRouter(DetailsItem);
