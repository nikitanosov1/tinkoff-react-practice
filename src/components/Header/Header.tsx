import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerMain}>
        <div className={style.leftText}>Админка фильмотеки</div>
        <div className={style.rightRectangle}>
          <div className={style.rightText}>Носов Никитосич</div>
        </div>
      </div>
    </div>
  );
};
