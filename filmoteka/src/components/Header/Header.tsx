import React from 'react'
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.leftText}>Админка фильмотеки</div>
        <div className={style.rightRectangle}>
          <div className={style.rightText}>
            Имя того кто это все закодил
          </div>
        </div>
    </div>
  )
}