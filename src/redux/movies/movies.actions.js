import axios from 'axios';
const API_KEY = 'cbd8c38d';

export function fetchMovies(search) {
    const URL = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=${API_KEY}`
    return dispatch => {
        return axios.get(URL)
        .then(res => {
            let movies = res.data.Search.filter(movie => movie.Poster !== 'N/A')
            return dispatch(getMovies(movies));
        }).catch(err => {
            console.log('error', err)
        });
    }
}


const getMovies = movies => ({
    type: 'FETCH_MOVIES',
    payload: movies
})