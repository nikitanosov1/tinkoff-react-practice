import React, { useEffect, useState } from 'react'
import type { MovieDetailsData } from '../../types';
import { HorizontalLine } from '../HorizontalLine/HorizontalLine';
import { Movie } from '../Movie/Movie';
import style from './MovieList.module.css';
import { useNavigate } from 'react-router-dom';

export const MovieList = ({movies} : any) => {
    const navigate = useNavigate();
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [idSelectedMovie, setIdSelectedMovie] = useState(-1);
    
    useEffect(() => {
        setFilteredMovies(() => movies);
        }
    , [movies]);

    const onChange = (event : any) => {
        setFilteredMovies((prev) => Array.from(filteredMovies)
            .filter((movie : MovieDetailsData) => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
        )
    }

    return (
        <section className={style.leftSection}>
            <input
                type="text"
                className={style.input} 
                placeholder='Введите название фильма'
                onChange={onChange}
            ></input>
            <div className={style.movies}>
                {filteredMovies
                    .map((movie : MovieDetailsData) => (
                    <Movie
                        id={movie.id}
                        key={movie.id}
                        title={movie.title} 
                        year={movie.year} 
                        genres={movie.genres}
                        selected={movie.id === idSelectedMovie}
                        onClick={() => {
                            setIdSelectedMovie(movie.id);
                            navigate(`/movies/${movie.id}`);
                        }}
                    />
                ))}
            </div>

            <HorizontalLine />

            <div className={style.footer}>
                <div className={style.footerLabel}>
                    Найдено {filteredMovies.length} элементов
                </div>
                <button
                    type="button"
                    className={style.createButton}
                    onClick={() => {navigate(`/movies/create`)}}
                >Добавить</button>
            </div>
        </section>
    )
}