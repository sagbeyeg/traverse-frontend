import React, { Component } from 'react';
import { Grid, Segment, Image, Card, Divider, Icon, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Review from './Review' 
import CreateEditReview from './CreateEditReview'
import { setCurrentLocation, deleteReview } from '../Redux/actions'
import {NavLink} from 'react-router-dom'
 class Location extends Component { 
  state = {
    form: false
  }

  componentDidMount(){
    this.setState({form: false}) 
    const id = parseInt(localStorage.getItem('locationId'))
    this.props.setLocation(id)
  }

  toggleForm = () => {
    this.setState(prevState => ({form: !prevState.form }))
  }

  clickHandler = () => {
    this.setState({form: false}) 
  }

  reviewUpdate = () => {
    // alert('Updating Review...')
    // this.componentDidMount()
  }

  deleteHandler = () => {
    // alert('Deleting Review...')
    // this.componentDidMount()
  }

  renderReviews = () => {
    if (this.props.currentLocation.reviews) { 
      console.log(this.props.currentLocation.reviews)
      return this.props.currentLocation.reviews.map((review, idx) => <Review reviewUpdate={this.reviewUpdate} review={review} key={idx} id={this.props.currentLocation.id} delete={this.deleteHandler}/>)
    }  
  }

  // locationRating = () => {
  //   if (this.props.currentLocation.reviews) {
      
  //     return star.repeat(review.rating) emptyStar.repeat(5 - review.rating)
  //     star.repeat(locRating) 
  //     // && emptyStar.repeat(5 - locRating)
  //     // 5514124541111555
  //     // currentLocation.reviews? currentLocation.reviews.rating.reduce((a,b) => a + b, 0) / currentLocation.reviews.length
  //   }
  // }

  render() {
    const { currentLocation } = this.props
    const star = "⭐"
    const emptyStar = "☆"
    // const revRatings = this.props.currentLocation.reviews.map(rev => rev.rating)
    // const locRating = parseInt(revRatings.reduce((a,b) => a + b, 0) / revRatings.length)
    // parseInt(this.props.currentLocation.reviews.map(rev => rev.rating).reduce((a,b) => a + b, 0) / revRatings.length)  

    console.log(this.props)
    console.log(currentLocation)

    return (
      <>
        {currentLocation?
          <>
            <br></br>
            <br></br>
            <h1>
              {currentLocation.name}<br></br>
            <Button size='big' id={currentLocation.id}>
              <Icon name='star' />
              Favorite
            </Button>
            <Button size='big' as={NavLink} to="/booktrip">Book a Trip Here!</Button>
            </h1>
            <br></br>
            <Grid columns={2} divided centered >
              <Grid.Row stretched>
                <Grid.Column width={6}>
                  <Segment> 
                    <Image src='https://media1.popsugar-assets.com/files/thumbor/Gbp5ZjfDuCDPFzlmvIMlSppdH74/887x0:3623x2736/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/14/239/n/40126596/2da006e05cdb994e042fe8.45308274_/i/Best-Travel-Destinations-Southeast-Asia.jpg' fluid wrapped />
                    <Divider />
                    <h3>{currentLocation.description}</h3>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={7} >
                  {this.state.form?
                    <>
                      <Button size='large' onClick={this.toggleForm}>Close Form</Button> 
                      <Segment className="location">
                        <br></br>
                        <CreateEditReview clickHandler={this.clickHandler} id={currentLocation.id}/>
                      </Segment>
                    </>
                  :
                  <>
                      <Button size='large' onClick={this.toggleForm}>Add a Review</Button>
                      <Segment > 
                        <h4 class="center">
                          {currentLocation.reviews? star.repeat(parseInt(currentLocation.reviews.map(rev => rev.rating).reduce((a,b) => a + b, 0) / currentLocation.reviews.length)) : null} {currentLocation.reviews? emptyStar.repeat(5 - parseInt(currentLocation.reviews.map(rev => rev.rating).reduce((a,b) => a + b, 0) / currentLocation.reviews.length)) : null} || {currentLocation.reviews? currentLocation.reviews.length : null} reviews
                        </h4>
                        <Divider /> 
                        {/* <br></br> */}
                        <Card.Group centered className="location">
                          {this.renderReviews()}
                        </Card.Group>
                      </Segment>
                    </>
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </>
        :
          null
        }
      </>
    );
  }
}

function mdp(dispatch){
  return {setLocation: (id) => dispatch(setCurrentLocation(id)), deleteReview: (id) => dispatch(deleteReview(id))}
}

function msp(state){
  console.log("State", state.currentLocation.reviews)
  return {currentLocation: state.currentLocation}
}

export default connect(msp, mdp)(Location);