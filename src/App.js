import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Redirect
} from 'react-router-dom'
import Profile from './Containers/Profile'
import LoginSignupEditUser from './Components/LoginSignupEditUser'
import LocationList from './Containers/LocationList'
import Navbar from './Components/Navbar'


class App extends React.Component {

  render () {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <h1>Welcome to Traverse</h1>
          <Route exact path="/profile" component={Profile}  />
          <Route exact path="/login" component={LoginSignupEditUser}  />
          <Route exact path="/locations" component={LocationList}  />
        </div>
      </Router>
    );
  }
}

export default App;
