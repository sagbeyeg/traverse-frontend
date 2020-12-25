import React, { Component } from 'react';
import {connect} from 'react-redux'
import Review from '../Components/Review'
import { getUserFromApi } from '../Redux/actions'

class ReviewList extends Component {
  componentDidMount = () => {
    //use dispatch to execute fetch call
    this.props.fetchUser()
  }
  
  render() {

    const {user} = this.props
    return (
      <div>
        <h1>Reviews</h1>
        {user.reviews? user.reviews.map((review, idx) => <Review review={review} key={idx}/> ) : null }
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

export default connect(msp, mdp)(ReviewList);