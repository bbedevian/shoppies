import axios from 'axios';
const API_KEY = 'get ya own key!';

export function fetchMovies(search) {
    const URL = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=${API_KEY}`
    return dispatch => {
        return axios.get(URL)
        .then(res => {
            let movies = res.data.Search
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