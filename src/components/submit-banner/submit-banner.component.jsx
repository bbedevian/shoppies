import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'
import {firestore} from '../../firebase/firebase.utils'
import './submit-banner.styles.scss'



const SubmitBanner = ({currentUser, submitNoms}) => {

    const handleSubmit = () => {
        firestore.collection('submissions').doc(currentUser.id).update({submitted: true})
        submitNoms()
    }

    return (
        <div className='banner'>
            <h1>Looks like you've got your 5!</h1>
            <h3>If you're happy with these, click submit below. If not, then remove some to add others.</h3>
            <CustomButton onClick={handleSubmit}>Submit Nominations</CustomButton>
        </div>
    );
}

const mdp = (dispatch) => {
    return {
        submitNoms: () => dispatch({ type: 'SUBMIT_NOMS'})
    }
  }

const msp = ({user}) => ({
    currentUser: user.currentUser
  })



export default connect(msp, mdp)(SubmitBanner);
