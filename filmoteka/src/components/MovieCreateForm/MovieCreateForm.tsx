import React, { useState } from 'react'
import style from './MovieCreateForm.module.css';
import { useOutletContext} from "react-router-dom";
import { createMovie } from '../../Services/apiService';
import { MovieDetailsData } from '../../types';
import { HorizontalLine } from '../HorizontalLine/HorizontalLine';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

const initMovieData = {
    id: 0,
    title: '',
    year: 0,
    plot: '',
    posterUrl: '',
    rate: 0,
    actors: '',
    genres: [],
    runtime: 0,
    director: '',
  };

export const MovieCreateForm = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetailsData>(initMovieData);
    const [ setMovies ] : any = useOutletContext();

    const saveData = () => {
        createMovie(movie)
            .then((response) => {
                setMovies((movies : MovieDetailsData[]) => [...movies, response])
        });
        NotificationManager.success(`${movie?.title}`, 'Фильм создан');
        navigate(`/movies`);
    };

    const handleChangeFor = (propertyName: string) => (event: { target: { value: any; }; }) => {
        let newValue = event.target.value;
        if (propertyName === 'genres') {
            newValue = newValue.split(',');
        }
        const newMovie : any = {
          ...movie,
          [propertyName]: newValue
        };
        setMovie((movie) => newMovie);
    }

    return (
        <form className={style.form}>
            <div className={style.title}>Создание</div>

            <label className={style.label}>Название фильма</label>
            <input 
                type="text"
                placeholder='Введите название фильма'
                className={style.input} 
                value={movie?.title}
                id='title'
                onChange={handleChangeFor('title')}
            />

            <label className={style.label}>Год выпуска</label>
            <input
                type="text"
                placeholder='Введите год выпуска'
                className={style.input}
                value={movie?.year}
                id='year'
                onChange={handleChangeFor('year')}
            />

            <label className={style.label}>Описание</label>
            <input
                type="text"
                placeholder='Введите ...'
                className={style.input}
                value={movie?.plot}
                id='plot'
                onChange={handleChangeFor('plot')}
            />
            
            <label className={style.label}>Укажите ссылку на обложку</label>
            <input
                type="text"
                placeholder='Введите ...'
                className={style.input}
                value={movie?.posterUrl}
                id='posterUrl'
                onChange={handleChangeFor('posterUrl')}
            />

            <label className={style.label}>Рейтинг</label>
            <input
                type="text"
                placeholder='Задайте рейтинг'
                className={style.input}
                value={movie?.rate}
                id='rate'
                onChange={handleChangeFor('rate')}
            />

            <label className={style.label}>Укажите список актеров</label>
            <input
                type="text"
                placeholder='Введите актеров (через ,)'
                className={style.input}
                value={movie?.actors}
                id='actors'
                onChange={handleChangeFor('actors')}
            />

            <label className={style.label}>Режиссер</label>
            <input
                type="text"
                placeholder='Введите ...'
                className={style.input}
                value={movie?.director}
                id='director'
                onChange={handleChangeFor('director')}
            />

            <label className={style.label}>Укажите список жанров</label>
            <input
                type="text"
                placeholder='Введите список жанров (через ,)'
                className={style.input}
                value={String(movie?.genres)}
                id='genres'
                onChange={handleChangeFor('genres')}
            />

            <label className={style.label}>Укажите продолжительность</label>
            <input
                type="text"
                placeholder='Введите список жанров'
                className={style.input}
                value={movie?.runtime}
                id='runtime'
                onChange={handleChangeFor('runtime')}
            />

            <HorizontalLine />

            <div className={style.footer}>
                <button 
                    type="button"
                    className={style.cancelButton}
                    onClick={() => {navigate(`/movies`)}}
                >Отменить</button>
                <button
                    type="button"
                    className={style.saveButton}
                    onClick={() => {saveData()}}
                >Сохранить</button>
            </div>

        </form>
    )
}