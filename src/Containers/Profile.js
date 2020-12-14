import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getUserFromApi } from '../Redux/actions'

class Profile extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function mpd(dispatch){
  return {fetchUser: () => dispatch(getUserFromApi())}
}

export default connect(null, mdp)(Profile);