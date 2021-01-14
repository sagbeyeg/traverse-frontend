import React, { Component } from 'react';
import { Grid, Segment, Image, Card, Divider, Icon, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Review from './Review' 
import CreateEditReview from './CreateEditReview'
import { setCurrentLocation, deleteReview } from '../Redux/actions'
import {NavLink} from 'react-router-dom'
import ReviewFilter from './ReviewFilter';
 class Location extends Component { 
  state = {
    form: false,
    filter: 'All'
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

  renderReviews = () => {
    if (this.props.currentLocation.reviews) { 
      console.log(this.props.currentLocation.reviews)
      if (this.state.filter === "All"){
        return this.props.currentLocation.reviews.map((review, idx) => <Review reviewUpdate={this.reviewUpdate} review={review} key={idx} id={this.props.currentLocation.id} delete={this.deleteHandler}/>)
      } else {
        return this.props.currentLocation.reviews.map((review, idx) => review.user.id == 1 && <Review reviewUpdate={this.reviewUpdate} review={review} key={idx} id={this.props.currentLocation.id} delete={this.deleteHandler}/>)
      }
    }  
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filter: value}, ()=>console.log(this.state.filter));
  };

  render() {
    const { currentLocation } = this.props
    const star = "⭐"
    const emptyStar = "☆"

    console.log(this.props)
    console.log(currentLocation)

    return (
      <>
        {currentLocation?
          <>
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
                  <Segment className="location-desc"> 
                    <div>
                      {currentLocation.id == 3?
                      <Image fluid wrapped src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/05/abuja-1589282102432.jpg?fit=750%2C496&ssl=1"/>
                      :null}
                      {currentLocation.id != 3?
                        <Image src='https://media1.popsugar-assets.com/files/thumbor/Gbp5ZjfDuCDPFzlmvIMlSppdH74/887x0:3623x2736/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/14/239/n/40126596/2da006e05cdb994e042fe8.45308274_/i/Best-Travel-Destinations-Southeast-Asia.jpg' fluid wrapped />
                      :null}
                      <Divider />
                      <h3>{currentLocation.description}</h3>
                    </div>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={7} >
                  {this.state.form?
                    <>
                      <Button size='large' onClick={this.toggleForm}>Cancel</Button> 
                      <Segment className="location">
                        <br></br>
                        <CreateEditReview clickHandler={this.clickHandler} id={currentLocation.id}/>
                      </Segment>
                    </>
                  :
                  <>
                      <Button size='large' onClick={this.toggleForm}>Add a Review</Button>
                      <Segment > 
                        <h4 class="center" >
                          {currentLocation.reviews? star.repeat(parseInt(currentLocation.reviews.map(rev => rev.rating).reduce((a,b) => a + b, 0) / currentLocation.reviews.length)) : null} {currentLocation.reviews? emptyStar.repeat(5 - parseInt(currentLocation.reviews.map(rev => rev.rating).reduce((a,b) => a + b, 0) / currentLocation.reviews.length)) : null} || {currentLocation.reviews? currentLocation.reviews.length : null} reviews
                        </h4>
                          <ReviewFilter onChangeType={this.onChangeType}/>
                        <Divider /> 
                        {/* <br></br> */}
                        <Card.Group centered className="location-no-form">
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