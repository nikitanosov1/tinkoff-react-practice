import React, { useState } from 'react'
import type { MovieProps } from '../../types';
import style from './Movie.module.css';

export const Movie = ({title, year, genres, selected, ...props} : MovieProps) => {

    return (
        <div className={style.movie}>
            <div className={style.title}>
                {title ?? 'Название'}
            </div>
            <div className={style.info}>
                <div className={style.year}>
                    {year ?? 'Год'}
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