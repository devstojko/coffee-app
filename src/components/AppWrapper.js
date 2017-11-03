import React from "react";

import style from "../components/AppWrapper.css";

export default function AppContainer({ children }) {
  return <div className={style.appWrapper}>{children}</div>;
}
