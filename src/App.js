import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from '../src/pages/homepage/homepage.component'
import SignUp from '../src/pages/sign-up/sign-up.component'
import ThankYou from './pages/thank-you/thank-you.component';


function App({currentUser}) {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/home' render={() => currentUser ? currentUser.submitted ? (<Redirect to='/thankyou' />) : (<HomePage/>) : (<Redirect to='/' />)}/>
        <Route exact path='/' render={() => currentUser ? (<Redirect to='/home' />) : (<SignUp/>)}/>
        <Route exact path='/thankyou' component={ThankYou}/>
      </Switch>
      <span>
      Presented by
      </span>
      <img src="shopify_logo_black.png" alt="shopify logo" width="75" height="auto"></img>
    </div>
  );
}

const msp = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(msp)(App);
