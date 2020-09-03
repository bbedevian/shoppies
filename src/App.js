import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import {Route, Switch} from 'react-router-dom';

import HomePage from '../src/pages/homepage/homepage.component'

function App({movies}) {
  console.log('movies App can see:>> ', movies);
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={HomePage}/>
        {/* <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp/>)}/> */}
      </Switch>
    </div>
  );
}

const msp = ({movies}) => ({
  movies: movies.movies
})

export default connect(msp)(App);
