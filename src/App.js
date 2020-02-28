import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Search';
import Favorites from './Favorites';


export default class App extends Component {
  state = {
    user: null
  }

  render() {
    return (
      <div className='App'>
        <header>
          Favorites App
        </header>
        <Router>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/' component={Favorites} />
          </Switch>
        </Router>
      </div>
    );
  }
}



