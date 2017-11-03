import React from "react";

import style from "../components/MapWrapper.css";

export default function AppContainer({ children }) {
  return <div className={style.mapWrapper}>{children}</div>;
}
