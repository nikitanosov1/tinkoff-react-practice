import React, { useState } from "react";
import style from "./MovieCreateForm.module.css";
import { useOutletContext } from "react-router-dom";
import { createMovie } from "../../Services/apiService";
import { MovieDetailsData } from "../../types";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { Input } from "../Input/Input";

const initMovieData = {
  id: 0,
  title: "",
  year: 0,
  plot: "",
  posterUrl: "",
  rate: 0,
  actors: "",
  genres: [],
  runtime: 0,
  director: "",
};

export const MovieCreateForm = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetailsData>(initMovieData);
  const [setMovies]: any = useOutletContext();

  const saveData = () => {
    createMovie(movie).then((response) => {
      setMovies((movies: MovieDetailsData[]) => [...movies, response]);
    });
    NotificationManager.success(`${movie?.title}`, "Фильм создан");
    navigate(`/movies`);
  };

  const handleChangeFor =
    (propertyName: string) => (event: { target: { value: any } }) => {
      let newValue = event.target.value;
      if (propertyName === "genres") {
        newValue = newValue.split(",");
      }
      setMovie((movie) => ({
        ...movie,
        [propertyName]: newValue,
      }));
    };

  return (
    <form className={style.form}>
      <div className={style.title}>Создание</div>

      <Input
        label="Название фильма"
        placeholder="Введите название фильма"
        value={movie?.title}
        id="title"
        onChange={handleChangeFor}
      />

      <Input
        label="Год выпуска"
        placeholder="Введите год выпуска"
        value={String(movie?.year)}
        id="year"
        onChange={handleChangeFor}
      />

      <Input
        label="Описание"
        placeholder="Введите ..."
        value={movie?.plot}
        id="plot"
        onChange={handleChangeFor}
      />

      <Input
        label="Укажите ссылку на обложку"
        placeholder="Введите ..."
        value={movie?.posterUrl}
        id="posterUrl"
        onChange={handleChangeFor}
      />

      <Input
        label="Рейтинг"
        placeholder="Задайте рейтинг"
        value={String(movie?.rate)}
        id="rate"
        onChange={handleChangeFor}
      />

      <Input
        label="Укажите список актеров"
        placeholder="Введите актеров (через ,)"
        value={movie?.actors}
        id="actors"
        onChange={handleChangeFor}
      />

      <Input
        label="Режиссер"
        placeholder="Введите ..."
        value={movie?.director}
        id="director"
        onChange={handleChangeFor}
      />

      <Input
        label="Укажите список жанров"
        placeholder="Введите ..."
        value={String(movie?.genres)}
        id="genres"
        onChange={handleChangeFor}
      />

      <Input
        label="Укажите продолжительность"
        placeholder="Введите продолжительность"
        value={String(movie?.runtime)}
        id="runtime"
        onChange={handleChangeFor}
      />

      <HorizontalLine />

      <div className={style.footer}>
        <button
          type="button"
          className={style.cancelButton}
          onClick={() => {
            navigate(`/movies`);
          }}
        >
          Отменить
        </button>
        <button
          type="button"
          className={style.saveButton}
          onClick={() => {
            saveData();
          }}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};
