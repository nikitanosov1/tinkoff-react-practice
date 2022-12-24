import React, { useEffect, useState } from 'react'
import type { MovieListProps, MovieProps } from '../../types';
import { Movie } from '../Movie/Movie';
import { SearchBar } from '../SearchBar/SearchBar';
import { getMovies } from './../../Services/apiService';
import style from './MovieList.module.css';

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getMovies().then((response) => {
                setMovies(response);
            }
        );
    }, []);

    return (
        <div>
            <input 
                className={style.input} 
                placeholder='Введите название фильма'
                onChange={(event) => setQuery(event.target.value)}
            >
            </input>
            {Array.from(movies)
                .filter((movie : MovieProps) => movie.title.toLowerCase().includes(query.toLowerCase()))
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
    )
}