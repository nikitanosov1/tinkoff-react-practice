import React, { useEffect, useRef, useState } from 'react'
import type { MovieDetailsData, Movies } from '../../types';
import { HorizontalLine } from '../HorizontalLine/HorizontalLine';
import { Movie } from '../Movie/Movie';
import style from './MovieList.module.css';
import { useNavigate } from 'react-router-dom';
import { GenresFilter } from '../GenresFilter/GenresFilter';

export const MovieList = ({movies} : Movies) => {
    const navigate = useNavigate();
    const [filteredMovies, setFilteredMovies] = useState<any>([]);
    const [idSelectedMovie, setIdSelectedMovie] = useState(-1);
    const [genres, setGenres] = useState<any>({});
    const input = useRef<any>(null);
    
    useEffect(() => {
        setFilteredMovies(() => movies);
        }
    , [movies]);

    useEffect(() => {
            onChange();
        }
    , [genres]);

    const onChange = () => {
        let inputValue = input.current.value;

        setFilteredMovies((prev : any) => Array.from(movies)
            .filter((movie : MovieDetailsData) => movie.title.toLowerCase().includes(inputValue.toLowerCase()))
            .filter((movie : MovieDetailsData) => {
                let hash = movie.genres.reduce((acc : any, i : any) => { acc[i] = true; return acc; }, {});
                for(let genre in genres) {
                    if (!(genre in hash) && genres[genre]) {
                        // Если этого жанра НЕТ у фильма И этот жанр включён, то не подходит фильмец 
                        return false;
                    }
                }
                return true;
            })
        );
    }

    return (
        <section className={style.leftSection}>
            <input
                type="text"
                className={style.input} 
                placeholder='Введите название фильма'
                onChange={onChange}
                ref={input}
            ></input>

            <GenresFilter
                genres={genres} 
                setGenres={setGenres}
            />
            
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
                    {filteredMovies.length === 1 ? 'Найден' : 'Найдено'}{' '}
                    {filteredMovies.length}{' '}
                    {filteredMovies.length > 1 && filteredMovies.length < 5
                        ? 'элемента'
                        : filteredMovies.length === 1
                        ? 'элемент'
                        : 'элементов'}
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