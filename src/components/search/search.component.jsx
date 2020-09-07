import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'
import {connect} from 'react-redux';
import {fetchMovies} from '../../redux/movies/movies.actions'

import './search.styles.scss'

class Search extends Component {

    state = {
        search: ''
    }

   

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
        this.props.fetchMovies(value)
    }

    render() {
        const {search} = this.state
        const {handleChange} = this
        return (
            <div className='search' >
                <FormInput handleChange={handleChange} name='search' type='text' value={search} label='search' required/>
            </div>
        );
    }
}

const mdp = (dispatch) => {
    return {
      fetchMovies: (search) => dispatch(fetchMovies(search))
    }
  }

export default connect(null, mdp)(Search);
