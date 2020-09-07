import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import {connect} from 'react-redux'
import {firestore} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'


class SignUp extends Component {

    state = {
        email: ''
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }



    // check db for user, if does not exist create
    handleSubmit = e => {
        e.preventDefault();
        const {email} = this.state
        firestore.collection("submissions").where("email", "==", email).get()
            .then((querySnapshot) => {
                querySnapshot.size > 0 ? 
                querySnapshot.forEach((doc) => {
                    let user = doc.data()
                    user.id = doc.id
                    this.props.setCurrentUser(user) 
                })
                :
                firestore.collection("submissions").add({
                    email: email,
                    submitted: false
                })
                .then(docRef => {
                   firestore.collection("submissions").where("id", "==", docRef.id).get()
                   .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        let user = doc.data()
                        user.id = docRef.id
                        this.props.setCurrentUser(user) 
                    })
                })
            })
        })
    }   

    render() {
        const {email} = this.state
        const {handleChange, handleSubmit} = this
        return (
        <div className='sign-up'>
            <h1>Welcome to the Shoppies Nomination Site</h1>
            <h1>Our First Annual Movie Awards</h1>
            <h3>Please enter your email to get started</h3>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} name='email' type='email' value={email} label='email' required/>
                <CustomButton type='submit'>GET STARTED</CustomButton>
            </form>
        </div>
        );
    }
}

const mdp = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch({ type: 'SET_CURRENT_USER', payload: user })
    }
  }

//   const msp = ({nominated}) => ({
//     nominated: nominated.nominated
//   })

export default connect(null, mdp)(SignUp);
