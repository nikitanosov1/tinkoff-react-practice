import React from 'react'
import Camel from './../../assets/camel.jpg';
import CopyButton from './../../assets/copy.png';
import EditButton from './../../assets/edit.png';
import style from './MovieDetails.module.css';

export const MovieDetails = () => {
  return (
    <div className={style.movieDetails}>
        <div className={style.movieDetailsHeader}>
            <div>Id: 101<img src={CopyButton} width='30' height='30'></img></div>
            <div><img src={EditButton} width='30' height='30'></img>Редактировать</div>
        </div>
        <div className={style.movieDetailsMain}>
            <img className={style.imageWrapper} width='300px' height='300px' src={Camel} alt="camel"/>
            <div className={style.movieDetailsInfo}>
                <div className={style.title}>Властелин колец: Кольца власти</div>
                <div className={style.author}>Tim Burton</div>
                <div className={style.paramsAndRolesWrapper}>

                    <section className={style.params}>
                        <div className={style.paramTitle}>Параметры</div>
                        <div className={style.paramRow}>
                            <div className={style.paramKey}>Год производства</div>
                            <div className={style.paramValue}>2022</div>
                        </div>
                        <div className={style.paramRow}>
                            <div className={style.paramKey}>Год производства</div>
                            <div className={style.paramValue}>2022</div>
                        </div>
                        <div className={style.paramRow}>
                            <div className={style.paramKey}>Год производства</div>
                            <div className={style.paramValue}>2022</div>
                        </div>
                    </section>

                    <section className={style.roles}>
                        <div className={style.roleTitle}>В главных ролях</div>
                        <div className={style.role}>Верблюд</div>
                        <div className={style.role}>Илья криво стреляет</div>
                        <div className={style.role}>Удалите игры</div>
                    </section>

                </div>
            </div>
        </div>
        <section className={style.descriptionSection}>
            <div className={style.descriptionTitle}>
                Описание
            </div>
            <div className={style.description}>
            Тупо описание: Несмотря на то, что наступили времена относительного мира, герои вынуждены противостоять возрождению зла в Средиземье.  Повсюду — от самых мрачных глубин Мглистых гор до величественных лесов Линдона, захватывающего дух островного королевства Нуменор и самых дальних уголков мира — в каждом королевстве герои событий создают наследие, которое будет жить еще долго после их ухода.
            </div>
        </section>
        <section className={style.rateSection}>
            <div className={style.rateTitle}>Текущий рейтинг</div>
            <div className={style.rateValue}>6.1</div>
        </section>
    </div>
  )
}