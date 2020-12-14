import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getUserFromApi } from '../Redux/actions'

class Profile extends Component {

  componentDidMount(){
    //use dispatch to execute fetch call
    this.props.fetchUser()
  }

  render() {

    return (
      <div>
        <h1>Profile</h1>
        {/* <h1>{user.name}</h1> */}
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchUser: () => dispatch(getUserFromApi())}
}

export default connect(null, mdp)(Profile);