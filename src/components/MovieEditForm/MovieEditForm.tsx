import React, { useEffect, useState } from "react";
import style from "./MovieEditForm.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import { editMovie, getMovieById, getMovies } from "../../Services/apiService";
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

export const MovieEditForm = () => {
  const [setMovies, movies] = useOutletContext<any>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetailsData>(initMovieData);

  useEffect(() => {
    getMovieById(Number(id)).then((response) => {
      if (!("rate" in response)) response.rate = 0;
      setMovie(response);
    });
  }, []);

  const saveData = () => {
    editMovie(movie)
      .then((response) => {
        getMovies()
          .then((newMovies) => {
            setMovies((prev: any) => newMovies);
            NotificationManager.success(`😃😃😃`, "Фильм отредактирован");
            navigate(`/movies/${id}`);
          })
          .catch(() => {
            NotificationManager.error(
              `;(`,
              "Ошибка при обновлении списка фильмов"
            );
          });
      })
      .catch(() =>
        NotificationManager.error(`;(`, "Ошибка при редактировании фильма")
      );
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
      <div className={style.title}>Редактирование</div>

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
            navigate(`/movies/${id}`);
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
