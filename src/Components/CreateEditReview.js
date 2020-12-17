import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react'
import { addReview, setCurrentLocation } from '../Redux/actions'

class CreateEditReview extends Component {
  
  submitHandler = (e) => {
    e.preventDefault()
    this.props.addReview()
    this.props.clickHandler()
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="title" class="form-control" name="title" placeholder="Title"></input>
        </div>
        <div class="form-group">
          <label for="rating">Rating</label>
          <select class="form-control" name="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea class="form-control" name="content" rows="3"></textarea>
        </div>
        <Button>Submit Review</Button>
      </form>
    );
  }
}

function mdp(dispatch){
  return {addReview: () => dispatch(addReview()), setLocation: () => dispatch(setCurrentLocation())}
} 

export default connect(null, mdp)(CreateEditReview);