import React from 'react'
import style from './SearchBar.module.css';
import type { SearchBarProps } from '../../types';

export const SearchBar = () => {
  return (
    <input className={style.input} 
        placeholder='Введите название фильма'
    >
    </input>
  )
}