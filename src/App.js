import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from '../src/pages/homepage/homepage.component'
import SignUp from '../src/pages/sign-up/sign-up.component'
import ThankYou from './pages/thank-you/thank-you.component';


function App({currentUser}) {
  console.log('currentUser :>> ', currentUser);
  return (
    <div>
      <Switch>
        <Route exact path='/home' render={() => currentUser ? currentUser.submitted ? (<Redirect to='/thankyou' />) : (<HomePage/>) : (<Redirect to='/' />)}/>
        <Route exact path='/' render={() => currentUser ? (<Redirect to='/home' />) : (<SignUp/>)}/>
        <Route exact path='/thankyou' component={ThankYou}/>
      </Switch>
    </div>
  );
}

const msp = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(msp)(App);
