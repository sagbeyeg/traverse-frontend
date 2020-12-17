import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react' 
import {connect} from 'react-redux'
import { deleteReview, setCurrentLocation } from '../Redux/actions'
class Review extends Component {
  state = {
    review: this.props.review
  }

  // clickHandler = (e) => {
  //   console.log(e.target.id)
  //   console.log(this.state.review)
  //   const configObj = {
  //     method: 'DELETE'
  //   }
  //   fetch(`http://localhost:3002/api/v1/reviews/${e.target.id}`, configObj)
  // }


  render() {
    const { review } = this.props
    const star = "⭐"
    const empty_star = "☆"
    return (
      <Card >
        <Card.Content>
          <Card.Header><h2>{review.title}</h2></Card.Header>
          <Card.Meta>Ministry of Magic</Card.Meta>
          {star.repeat(review.rating)}{empty_star.repeat(5 - review.rating)}
          <Card.Description>
            <h5>{review.content}</h5>
          </Card.Description>
          {review.user_id == 1?
          <>
          <Button id={review.id} onClick={this.props.deleteHandler}>Delete</Button>
          </>
          :
          null
        }
        </Card.Content>
      </Card>
    );
  }
}

function mdp(dispatch){
  return {deleteReview: () => dispatch(deleteReview()), setLocation: () => dispatch(setCurrentLocation())}
}

export default connect(null, mdp)(Review);