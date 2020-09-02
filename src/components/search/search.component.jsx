import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

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
   
    }

    render() {
        const {search} = this.state
        const {handleChange} = this
        return (
            <div>
                <form className='search-form'>
                <FormInput handleChange={handleChange} name='search' type='text' value={search} label='search' required/>
                <CustomButton>Search</CustomButton>
                </form>
            </div>
        );
    }
}

export default Search;
