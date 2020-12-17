import React, { Component } from 'react';
import {connect} from 'react-redux'
import Trip from '../Components/Trip'
import { getUserFromApi } from '../Redux/actions'

class TripList extends Component {
  componentDidMount = () => {
    //use dispatch to execute fetch call
    this.props.fetchUser()
  }
  
  render() {

    const {user} = this.props
    return (
      <div>
        <h1>Trips</h1>
        {user.trips? user.trips.reverse().map((trip, idx) => <Trip trip={trip} key={idx}/> ) : null }
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchUser: () => dispatch(getUserFromApi())}
}

function msp(state){ 
  return {user: state.user}
}

export default connect(msp, mdp)(TripList);