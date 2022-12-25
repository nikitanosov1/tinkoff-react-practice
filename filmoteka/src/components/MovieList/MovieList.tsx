import React, { useEffect, useState } from 'react'
import type { MovieListProps, MovieProps } from '../../types';
import { HorizontalLine } from '../HorizontalLine/HorizontalLine';
import { Movie } from '../Movie/Movie';
import { getMovies } from './../../Services/apiService';
import style from './MovieList.module.css';

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        getMovies().then((response) => {
                setMovies(response);
                setFilteredMovies(response);
            }
        );
    }, []);

    const onChange = (event : any) => {
        setFilteredMovies(Array.from(movies)
            .filter((movie : MovieProps) => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
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
                    .map((movie : MovieProps) => (
                    <Movie
                        id={movie.id}
                        key={movie.id}
                        title={movie.title} 
                        year={movie.year} 
                        genres={movie.genres}
                        selected={false}
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
                    onClick={() => {}}
                >Добавить</button>
            </div>
        </section>
    )
}