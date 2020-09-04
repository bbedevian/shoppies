import React from 'react';
import MovieCard from '../movie-card/movie-card.component'
import {connect} from 'react-redux'
import './selected-container.styles.scss'

const SelectedContainer = ({nominated}) => {
    return (
        <div>
            <h1>Currently selected</h1>
            <div className='selected-container'>
                {nominated.map((movie, index) => (
                    <MovieCard key={index} movie={movie} selected={true}/>
                ))}
            </div>
        </div>
    );
}

const msp = ({nominated}) => ({
    nominated: nominated.nominated
  })

export default connect(msp)(SelectedContainer);
