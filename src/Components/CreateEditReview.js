import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'semantic-ui-react'
import { addReview, setCurrentLocation } from '../Redux/actions'

class CreateEditReview extends Component {
  state = {
    title: '',
    rating: 1,
    content: ''
  }

  changeHandler = (e) => {
    
    this.setState({
      ...this.state, [ e.target.name ]: e.target.value
    }, () => console.log(this.state))
  }

  submitHandler = (e) => {
    e.preventDefault() 
    let review = {
      title: this.state.title,
      rating: this.state.rating,
      content: this.state.content
    }

    this.props.addReview(review)
    this.props.clickHandler()
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}> 
        <div className="form-group">
          <label for="title">Title</label>
          <input type="title" className="form-control" name="title" placeholder="Title" value={this.state.title} onChange={(e) => this.changeHandler(e)}></input>
        </div>
        <div className="form-group">
          <label for="rating">Rating</label>
          <select className="form-control" name="rating" value={this.state.rating} onChange={(e) => this.changeHandler(e)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label for="content">Content</label>
          <textarea className="form-control" name="content" rows="3" value={this.state.content} onChange={(e) => this.changeHandler(e)}></textarea>
        </div>
        <Button>Submit Review</Button>
      </form>
    );
  }
}

function mdp(dispatch){
  return {addReview: (review) => dispatch(addReview(review)), setLocation: () => dispatch(setCurrentLocation())}
} 

export default connect(null, mdp)(CreateEditReview);