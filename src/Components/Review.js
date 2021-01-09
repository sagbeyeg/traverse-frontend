import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react' 
import {connect} from 'react-redux'
import { deleteReview, updateReview } from '../Redux/actions'
import { Planet } from 'react-planet';
class Review extends Component {
  state = {
    review: this.props.review,
    edit: false,
    title: this.props.review.title,
    rating: this.props.review.rating,
    content: this.props.review.content,
  }

  // clickHandler = (e) => {
  //   console.log(e.target.id)
  //   console.log(this.state.review)
  //   const configObj = {
  //     method: 'DELETE'
  //   }
  //   fetch(`http://localhost:3002/api/v1/reviews/${e.target.id}`, configObj)
  // }
  toggleEdit = () => {
    // this.setState(prevState => ({edit: !prevState.edit }), () => console.log(this.state.edit))
    alert("Please navigate to the Destination to edit your review.")
  }

  changeHandler = (e) => {
    this.setState({
      ...this.state, [ e.target.name ]: e.target.value
    }, () => console.log(this.state))
  }
 
  submitHandler = (e) => {
    e.preventDefault()
    let review = {
      location_id: this.props.id,
      user_id: 1,
      title: this.state.title,
      rating: this.state.rating,
      content: this.state.content
    }
    let reviewId = this.props.review.id
    this.props.updateReview(review, reviewId)
    this.setState({edit: false})
  }

  deleteHandler = (e) => {
    // console.log(e.target.id)
    // let id = parseInt(e.target.id)
    // this.props.deleteReview(id)
    alert("Please navigate to the Destination to delete your review.")
  }

  clickHandler = () => {
    localStorage.setItem('locationId', this.props.review.location.id);
    localStorage.setItem('locationName', this.props.review.location.name);
  }

  userClickHandler = (e) => {
    localStorage.setItem("userId", this.props.review.user.id)
  }

  render() {
    const { review } = this.props
    const star = "⭐"
    const empty_star = "☆"
    return (
      <>
      {this.state.edit?
        <Card>
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
            <Button onClick={this.toggleEdit}>Cancel</Button>
            <Button color="green">Submit Update</Button>
          </form>
        </Card>
      :
        <Card >
          <Card.Content>
          {review.user_id == 1?
            <Planet
                centerContent={<Icon color="blue" name="th list" />}
                hideOrbit
                autoClose
                orbitRadius={40}
                bounceOnClose
                align="right"
                rotation={105}
                // the bounce direction is minimal visible
                // but on close it seems the button wobbling a bit to the bottom
                bounceDirection="BOTTOM"
            >
                <div />
                <div />
                <div />
                <div />
                <div />
                <Icon name="trash" color='red' size="large" id={review.id} onClick={this.deleteHandler} style={{cursor: 'pointer'}}/>
                <Icon name="edit" color="green" size="large" id={review.id} onClick={this.toggleEdit} style={{cursor: 'pointer'}}/>
            </Planet>
            :
            null
          }
            <Card.Header><h2>{review.title}</h2></Card.Header>
            {star.repeat(review.rating)}{empty_star.repeat(5 - review.rating)}
            <Card.Meta>
              <a href="user" onClick={this.userClickHandler} style={{cursor: 'pointer'}}>{review.user_id == 1?"You": review.user.name}</a>for <a href="location" onClick={this.clickHandler}style={{cursor: 'pointer'}}><strong>{review.location.name}</strong></a> 
            </Card.Meta>
            <Card.Description>
              <h5>{review.content}</h5>
            </Card.Description>
              {/* {review.user_id == 1?
            <>
            <Button id={review.id} onClick={this.toggleEdit}>Edit</Button>
            <Button color='red' id={review.id} onClick={this.deleteHandler}>Delete</Button>
            </>
            :
            null
          } */}
          </Card.Content>
        </Card>
      }
      </>
    );
  }
}

function mdp(dispatch){
  return {deleteReview: (id) => dispatch(deleteReview(id)), updateReview: (review, reviewId) => dispatch(updateReview(review, reviewId))}
}

export default connect(null, mdp)(Review);