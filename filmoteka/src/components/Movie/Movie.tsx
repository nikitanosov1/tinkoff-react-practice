import React, { useState } from 'react'
import type { MovieProps } from '../../types';
import style from './Movie.module.css';
import { useNavigate } from 'react-router-dom';

export const Movie = ({id, title, year, genres, selected, ...props} : MovieProps) => {
    const navigate = useNavigate();

    return (
        <div id={id.toString()} className={style.movie} onClick={() => navigate(`/movies/${id}`)}>
            <div className={style.title}>
                {title ?? 'Название'}
            </div>
            <div className={style.info}>
                <div className={style.year}>
                    {year ?? 'Год'}
                </div>
                <div className={style.dash}>
                    |
                </div>
                <div className={style.genres}>
                    {Array.from(genres).map((genre) => (
                        <div className={style.genre} key={genre}>
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}