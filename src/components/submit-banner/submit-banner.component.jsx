import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux'
import {firestore} from '../../firebase/firebase.utils'



const SubmitBanner = ({currentUser, submitNoms}) => {

    const handleSubmit = () => {
        firestore.collection('submissions').doc(currentUser.id).update({submitted: true})
        submitNoms()
    }

    return (
        <div className='banner'>
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
