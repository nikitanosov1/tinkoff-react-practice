import React from 'react'
import style from './Main.module.css';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';
import { MovieDetails } from '../MovieDetails/MovieDetails';

export const Main = () => {
  return (
    <main className={style.main}>
      <MovieList />
      <MovieDetails />
    </main>
  )
}