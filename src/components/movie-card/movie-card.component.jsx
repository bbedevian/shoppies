import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import './movie-card.styles.scss'

const MovieCard = ({movie, nominateMovie, nominated, selected, removeMovie}) => {

    const {Title, Year, Poster} = movie
    let isNominated = nominated.includes(movie)

    return (
        <div className={`movie-card ${selected ? 'nominated' : ''}`}>

            <div className='background-image' style={{backgroundImage: `url(${Poster})`}}/>
            <div className='content'>
                {selected ? 
                <CustomButton onClick={() => removeMovie(movie)} type='button'>Remove</CustomButton>
                :
                <>
                <h1 className='title'>{Title}</h1>
                <span className='year'>{Year}</span>
                <CustomButton onClick={() => nominateMovie(movie)} type='button' disabled={isNominated}>{isNominated ? 'Nominated'  : 'Nominate'}</CustomButton>
                </>
                }
            </div>
        </div>
    );
}

const mdp = (dispatch) => {
    return {
        nominateMovie: (movie) => dispatch({ type: 'NOMINATE_MOVIE', payload: movie }),
        removeMovie: (movie) => dispatch({type: 'REMOVE_MOVIE', payload: movie})
    }
  }

  const msp = ({nominated}) => ({
    nominated: nominated.nominated
  })

export default connect(msp, mdp)(MovieCard);
