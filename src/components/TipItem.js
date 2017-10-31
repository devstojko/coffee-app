import React from "react";

import style from "./TipItem.css";

export default function TipItem(props) {
  const { user } = props.item;

  const fullName = `${user.firstName} ${user.lastName}`;
  const src = `${user.photo.prefix}32x32${user.photo.suffix}`;

  return (
    <div className={style.item}>
      <img className={style.img} src={src} alt="user image" />
      <div className={style.content}>
        <h4 className={style.title}>{fullName}</h4>
        <p className={style.text}>{props.item.text}</p>
      </div>
    </div>
  );
}
