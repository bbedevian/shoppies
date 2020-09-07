import React from 'react';
import {connect} from 'react-redux'
import MovieCard from '../movie-card/movie-card.component'
import './directory.styles.scss'

const Directory = ({movies,nominated}) => {
    let maxNominated = nominated.length >= 5
    return (
        <div className='directory'>
            {
            maxNominated ? 
                null 
            :
                movies && movies.length > 0 ? 
                movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie}/>
                )) 
                : 
                null
            }
        </div>
    );
}

const msp = ({movies, nominated}) => ({
    movies: movies.movies,
    nominated: nominated.nominated
  })

export default connect(msp)(Directory);
