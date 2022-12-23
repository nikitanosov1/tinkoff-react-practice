import axios from 'axios';

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

// const editPost = async (postData) => {
//     const { data } = await API.patch('/' + postData.id, postData);
//     return data;
// };

export const getMovies = async () => {
    const { data } = await API.get('/movies');
    return data;
};