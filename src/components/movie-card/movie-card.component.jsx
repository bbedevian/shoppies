import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import './movie-card.styles.scss'

const MovieCard = ({movie, nominateMovie}) => {

    const {Title, Year, Poster} = movie

    return (
        <div className='movie-card'>

            <div className='background-image' style={{backgroundImage: `url(${Poster})`}}/>
            <div className='content'>
                <h1 className='title'>{Title}</h1>
                <span className='year'>{Year}</span>
                <CustomButton onClick={() => nominateMovie(movie)}type='button'>Nominate</CustomButton>
            </div>
        </div>
    );
}

const mdp = (dispatch) => {
    return {
        nominateMovie: (movie) => dispatch({ type: 'NOMINATE_MOVIE', payload: movie }),
    }
  }

export default connect(null, mdp)(MovieCard);
