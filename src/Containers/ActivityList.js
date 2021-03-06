import React, { Component } from 'react'; 
import {Icon, Segment, Card} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getReviewsFromApi, getTripsFromApi } from '../Redux/actions'
import Activity from '../Components/Activity';


class ActivityList extends Component {
  state = {
    show: "reviews"
  } 

  componentDidMount = () => {
    this.props.fetchReviews() 
    this.props.fetchTrips()
  }

  renderInfo = (e) => {
    if (e.target.innerText == "Trips") {
      this.setState({show: "trips"}, () => console.log("State changed to:", this.state.show))
    } else if (e.target.innerText == "Reviews"){
      this.setState({show: "reviews"}, () => console.log("State changed to:", this.state.show))
    }
  }

  render() {
    const { trips } = this.props
    // console.log(trips)
    const { reviews } = this.props
    // console.log(reviews)
    const followers = localStorage.getItem('following').split(",").map(num => parseInt(num)) 
    // console.log(followers)
    return (
      <div>
        <div class="activity">
        <h1>Home</h1>
          <ul class="nav nav-tabs nav-fill" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
            <li class="nav-item" >
              <a class={this.state.show == 'reviews'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><h2><Icon name='clipboard list' color='white' />Reviews</h2></a>
            </li>
            <li class="nav-item">
              <a class={this.state.show == 'trips'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><h2><Icon color='white' name='travel' />Trips</h2></a>
            </li>
          </ul>
          <br></br>
          <div class="home-scroll">
            <Card.Group centered itemsPerRow={1} >
              {this.state.show ==  "trips"? 
                trips.map(trip => trip.user.id != 1 && followers.includes(trip.user.id) && <Activity trip={trip} user={trip.user} state={this.state.show} />)
                :
                reviews.map(review => review.user.id != 1 && followers.includes(review.user.id) && <Activity review={review} user={review.user} state={this.state.show} />)
              } 
            </Card.Group>
          </div>
        </div>
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchReviews: () => dispatch(getReviewsFromApi()), fetchTrips: () => dispatch(getTripsFromApi())}
}

function msp(state){ 
  return {reviews: state.reviews, trips: state.trips}
}

export default connect(msp, mdp)(ActivityList);