import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Profile from './Containers/Profile'


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <h1>Welcome to Traverse</h1>
        <Profile />
      </div>
    );
  }
}

export default App;
