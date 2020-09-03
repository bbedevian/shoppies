import React from 'react';
import {connect} from 'react-redux'
import './selected-container.styles.scss'

const SelectedContainer = ({nominated}) => {
    return (
        <div className='selected-container'>
            <h1>Currently selected</h1>
            {nominated.map((movie, index) => (
                <h1 key={index}> {movie.Title}</h1>
            ))}
        </div>
    );
}

const msp = ({nominated}) => ({
    nominated: nominated.nominated
  })

export default connect(msp)(SelectedContainer);
