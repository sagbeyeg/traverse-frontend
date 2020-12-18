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
    alert('Adding Review...')
    this.componentDidMount()
  }

  reviewUpdate = () => {
    alert('Updating Review...')
    this.componentDidMount()
  }

  deleteHandler = () => {
    // alert('Deleting Review...')
    this.componentDidMount()
  }

  render() {
    const { currentLocation } = this.props
    console.log(this.props)
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
                        <CreateEditReview clickHandler={this.clickHandler} id={currentLocation.id}/>
                      </Segment>
                    </>
                  :
                    <>
                      <Button size='large' onClick={this.toggleForm}>Add a Review</Button>
                      <Segment className="location">
                        <Card.Group centered>
                          {currentLocation.reviews? currentLocation.reviews.slice(0).reverse().map((review, idx) => <Review reviewUpdate={this.reviewUpdate} review={review} key={idx} id={currentLocation.id} delete={this.deleteHandler}/>  ) : null }
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
  return {currentLocation: state.currentLocation}
}

export default connect(msp, mdp)(Location);