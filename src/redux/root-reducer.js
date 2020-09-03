import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import moviesReducer from './movies/movies.reducer'
import nominatedReducer from './nominated/nominated.reducer'

export default combineReducers({
    user: userReducer,
    movies: moviesReducer,
    nominated: nominatedReducer
})
