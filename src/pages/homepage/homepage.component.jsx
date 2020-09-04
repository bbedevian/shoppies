import React from 'react';
import './homepage.styles.scss';
import SelectedContainer from '../../components/selected-container/selected-container.component';
import Search from '../../components/search/search.component';
import Directory from '../../components/directory/directory.component';

import {connect} from 'react-redux'


const HomePage = ({movies, nominated}) => {
    return (
        <div className='homepage'>
            <SelectedContainer/>
            {nominated.length >= 5 ? <h1> Submit Banner</h1> : <Search/> }
            <Directory/>
        </div>
    );
}

const msp = ({movies, nominated}) => ({
    movies: movies.movies,
    nominated: nominated.nominated
  })

export default connect(msp)(HomePage);
