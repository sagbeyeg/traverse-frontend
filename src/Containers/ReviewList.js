import React, { Component } from 'react';
import {connect} from 'react-redux'

class ReviewList extends Component {
  render() {
    return (
      <div>
        <h1>Reviews</h1>
      </div>
    );
  }
}

function msp(state){
  return {user: state.user}
}

export default connect(msp)(ReviewList);