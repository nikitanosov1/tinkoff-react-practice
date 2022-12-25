import React from 'react'
import style from './Main.module.css';
import { MovieList } from '../MovieList/MovieList';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <main className={style.main}>
      <MovieList />
      <Outlet />
    </main>
  )
}