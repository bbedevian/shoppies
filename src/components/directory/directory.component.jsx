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
                movies.length > 0 ? 
                movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie}/>
                )) 
                : 
                <span className='no-movies'>Search for some movies first</span>
            }
        </div>
    );
}

const msp = ({movies, nominated}) => ({
    movies: movies.movies,
    nominated: nominated.nominated
  })

export default connect(msp)(Directory);
