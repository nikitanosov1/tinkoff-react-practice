import React from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { MovieList } from '../components/MovieList/MovieList'
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Header />
      <MovieList />
      <Outlet />
    </>
  )
}