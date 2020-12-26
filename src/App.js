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
import Location from './Components/Location'
import CreateTrip from './Components/CreateTrip' 
import FollowerList from './Containers/FollowerList'
import FollowingList from './Containers/FollowingList'


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
          <Route exact path="/location" component={Location}  />
          <Route exact path="/booktrip" component={CreateTrip} />
          <Route exact path="/followers" component={FollowerList} />
          <Route exact path="/following" component={FollowingList} />
        </div>
      </Router>
    );
  }
}

export default App;
