import React, { useEffect, useState } from 'react'
import type { MovieListProps, MovieProps } from '../../types';
import { Movie } from '../Movie/Movie';
import { getMovies } from './../../Services/apiService';

export const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((response) => {
                setMovies(response);
            }
        );
    }, []);

    return (
        <div>
            {Array.from(movies).map((movie : MovieProps) => (
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