import React from 'react';
import {connect} from 'react-redux'

const ThankYou = ({nominated}) => {
    return (
        <div>
            {nominated.length > 0 ?
            <h1>Thanks for submitting!</h1>
            :
            <h1>You've already submitted nominations.</h1>
            }
            <h1>Stay tuned as we announce the winners in the coming weeks!</h1>
        </div>
    );
}

const msp = ({nominated}) => ({
    nominated: nominated.nominated
  })


export default connect(msp)(ThankYou);
