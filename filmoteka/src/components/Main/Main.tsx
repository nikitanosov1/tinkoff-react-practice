import React, { useEffect, useState } from 'react'
import style from './Main.module.css';
import { MovieList } from '../MovieList/MovieList';
import { Outlet } from 'react-router-dom';
import { getMovies } from './../../Services/apiService';

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((response) => {
            setMovies((prev) => response);
        }
    );
  }, []);

  return (
    <main className={style.main}>
      <MovieList movies={movies}/>
      <Outlet context={[setMovies]}/>
    </main>
  )
}