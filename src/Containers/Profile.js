import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getUserFromApi } from '../Redux/actions'
import Review from '../Components/Review'
import Trip from '../Components/Trip'
import UserInfo from '../Components/UserInfo'
import { Button, Grid, Segment, Header, Icon, Card } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class Profile extends Component {
  state = {
    show: 'reviews'
  }

  componentDidMount(){
    //use dispatch to execute fetch call
    localStorage.setItem("userId", 1)
    this.props.fetchUser(localStorage.getItem("userId"))
  }

  renderInfo = (e) => {
    if (e.target.innerText == 'Reviews') {
      this.setState ({ show: 'reviews'}, () => console.log("State changed to:", this.state.show))
    } else if (e.target.innerText == 'Favorite Locations') {
      this.setState ({ show: 'favLocations'}, () => console.log("State changed to:", this.state.show))
    } else if (e.target.innerText == 'Trips') {
      this.setState ({ show: 'trips'}, () => console.log("State changed to:", this.state.show))
    }
  }

  render() {
    const {user} = this.props
    return (
      <div className="profile">
        <br></br>
        <br></br>
        <Grid columns={2} divided centered >
          <Grid.Row stretched>
            <UserInfo />
            <Grid.Column >
              <Segment textAlign='center'>
              <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" >
                  <a class={this.state.show == 'reviews'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><Icon name='clipboard list' color='blue' />Reviews</a>
                </li>
                {/* <li class="nav-item">
                  <a class={this.state.show == 'favLocations'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><Icon color='blue' name='home' />Favorite Locations</a>
                </li> */}
                <li class="nav-item">
                  <a class={this.state.show == 'trips'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><Icon color='blue' name='travel' />Trips</a>
                </li>
              </ul>
              <br></br>
              {this.state.show == 'reviews'?
              <div className="profile-cards"> 
                <Header icon>
                  <Icon name='clipboard list' color='blue' />
                </Header> 
                <Card.Group centered>
                  {user.reviews? user.reviews.map((review, idx) => <Review review={review} key={idx}/> ) : null }
                </Card.Group>
              </div>
              : null}
              {this.state.show == 'favLocations'? 
              <Segment placeholder className="profile-cards">
                <Header icon>
                  <Icon color='blue' name='home' />
                  No locations have been added to favorites.
                </Header>
                <Button color='grey' as={NavLink} to="/locations">Browse Destinations</Button>
              </Segment>
              : null }
              {this.state.show == 'trips'? 
              <div className="profile-cards">
                <Header icon>
                  <Icon name='travel' color='blue' />
                </Header>
                <Card.Group centered>
                  {user.trips? user.trips.map((trip, idx) => <Trip user={this.props.user} trip={trip} key={idx}/> ) : null }
                </Card.Group>
              </div>
              : null }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchUser: (user) => dispatch(getUserFromApi(user))}
}

function msp(state){ 
  return {user: state.user}
}

export default connect(msp, mdp)(Profile);