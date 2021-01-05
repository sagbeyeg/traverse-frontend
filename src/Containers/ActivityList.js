import React, { Component } from 'react'; 
import {Icon, Segment} from 'semantic-ui-react'
import Review from '../Components/Review'
import Trip from '../Components/Trip'
import { connect } from 'react-redux'
import { getReviewsFromApi, getTripsFromApi } from '../Redux/actions'


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
    console.log(trips)
    const { reviews } = this.props
    console.log(reviews)
    return (
      <div>
        <div class="activity">
        <h1>Activity</h1>
        <br></br>
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item" >
              <a class={this.state.show == 'reviews'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><h1><Icon name='clipboard list' color='blue' />Reviews</h1></a>
            </li>
            <li class="nav-item">
              <a class={this.state.show == 'trips'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><h1><Icon color='blue' name='travel' />Trips</h1></a>
            </li>
          </ul>
          <br></br>
          {this.state.show ==  "trips"?
          <>
            {this.props.trips.map(trip => <Trip trip={trip} />)}  
          </>
          :null} 
          {this.state.show ==  "reviews"? 
          <>
          {reviews.map(review => <Review review={review} />)}
        </>
          :null} 
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