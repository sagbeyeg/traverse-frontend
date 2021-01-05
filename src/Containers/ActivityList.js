import React, { Component } from 'react'; 
import {Icon, Segment, Card} from 'semantic-ui-react'
import Review from '../Components/Review'
import Trip from '../Components/Trip'
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
    console.log(trips)
    const { reviews } = this.props
    console.log(reviews)
    return (
      <div>
        <div class="activity">
        <h1>Home</h1>
        {/* <br></br> */}
          <ul class="nav nav-tabs nav-fill" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
            <li class="nav-item" >
              <a class={this.state.show == 'reviews'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><h2><Icon name='clipboard list' color='white' />Reviews</h2></a>
            </li>
            <li class="nav-item">
              <a class={this.state.show == 'trips'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><h2><Icon color='white' name='travel' />Trips</h2></a>
            </li>
          </ul>
          <br></br>
          {this.state.show ==  "trips"? 
          <>
          <Card.Group centered itemsPerRow={1}>
            {this.props.trips.map(trip => <Trip trip={trip} />)}  
          </Card.Group>
          </>
          :null} 
          {this.state.show ==  "reviews"? 
          <>
          <Card.Group centered itemsPerRow={1}>
          {reviews.map(review => <Activity review={review} user={review.user}/>)}

          </Card.Group>
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