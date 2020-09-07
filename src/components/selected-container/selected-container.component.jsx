import React from 'react';
import MovieCard from '../movie-card/movie-card.component'
import {connect} from 'react-redux'
import './selected-container.styles.scss'

const SelectedContainer = ({nominated}) => {
    return (
        <div className='selected-container'>
            {nominated.length ? 
                <span className='selected-text'>Your Nominations</span>
                :
                <span className='selected-text'>Search for a movie to get started</span>
            }
            
            <div className='selected-container'>
                {nominated.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} selected={true}/>
                ))}
            </div>
        </div>
    );
}

const msp = ({nominated}) => ({
    nominated: nominated.nominated
  })

export default connect(msp)(SelectedContainer);
