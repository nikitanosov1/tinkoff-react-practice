import React, { useEffect, useState } from 'react'
import Camel from './../../assets/camel.jpg';
import CopyButton from './../../assets/copy.png';
import EditButton from './../../assets/edit.png';
import style from './MovieDetails.module.css';
import { useParams } from "react-router-dom";
import { getMovieById } from './../../Services/apiService.js';
import { MovieDetailsData } from '../../types';


export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieDetailsData>();

    useEffect(() => {
        getMovieById(id).then((response) => {
                setMovie(response);
            }
        );
    }, [id]);

    return (
        <div className={style.movieDetails}>
            <div className={style.movieDetailsHeader}>
                <div className={style.idBlock}>Id: {movie?.id}<img className={style.copyButtonImage} src={CopyButton}></img></div>
                <div className={style.editBlock}><img className={style.editButtonImage} src={EditButton}></img>Редактировать</div>
            </div>
            <div className={style.movieDetailsMain}>
                <img className={style.imageWrapper} width='300px' height='300px' src={movie?.posterUrl} alt="camel"/>
                <div className={style.movieDetailsInfo}>
                    <div className={style.title}>{movie?.title}</div>
                    <div className={style.author}>{movie?.director}</div>
                    <div className={style.paramsAndRolesWrapper}>

                        <section className={style.params}>
                            <div className={style.paramTitle}>Параметры</div>
                            <div className={style.paramRow}>
                                <div className={style.paramKey}>Год производства</div>
                                <div className={style.paramValue}>{movie?.year}</div>
                            </div>
                            <div className={style.paramRow}>
                                <div className={style.paramKey}>Продолжительность</div>
                                <div className={style.paramValue}>{movie?.runtime}</div>
                            </div>
                        </section>

                        <section className={style.roles}>
                            <div className={style.roleTitle}>В главных ролях</div>
                            {movie?.actors
                                .split(',')
                                .map((actor, i) => (
                                <div className={style.role} key={i}>{actor}</div>
                            ))}
                        </section>

                    </div>
                </div>
            </div>
            <section className={style.descriptionSection}>
                <div className={style.descriptionTitle}>
                    Описание
                </div>
                <div className={style.description}>
                {movie?.plot}
                </div>
            </section>
            <section className={style.rateSection}>
                <div className={style.rateTitle}>Текущий рейтинг</div>
                <div className={style.rateValue}>6.1</div>
            </section>
        </div>
    )
}