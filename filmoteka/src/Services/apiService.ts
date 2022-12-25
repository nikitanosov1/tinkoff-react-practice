import axios from 'axios';
import { MovieDetailsData } from '../types';

const API = axios.create({
    baseURL: 'http://localhost:3001',
});

// const createPost = async (postData) => {
//     const { data } = await API.post('/', postData);
//     return data;
// };

// const deletePost = async (id) => {
//     const { data } = await API.delete('/' + id);
//     return data;
// };

export const editMovie = async (movieData : MovieDetailsData) => {
    console.log(movieData);
    const { data } = await API.put(`/movies/` + movieData.id, movieData);
    return data;
};

export const getMovies = async () => {
    const { data } = await API.get('/movies');
    return data;
};

export const getMovieById = async (id : number) => {
    const { data } = await API.get(`/movies/${id}`);
    return data;
};