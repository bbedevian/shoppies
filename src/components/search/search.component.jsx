import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {fetchMovies} from '../../redux/movies/movies.actions'

class Search extends Component {

    state = {
        search: ''
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.state.search)
    }

    render() {
        const {search} = this.state
        const {handleChange, handleSubmit} = this
        return (
            <div className='search-form' >
                <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} name='search' type='text' value={search} label='search' required/>
                <CustomButton type='submit'>Search</CustomButton>
                </form>
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
