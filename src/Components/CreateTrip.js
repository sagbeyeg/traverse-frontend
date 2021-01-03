import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { addTrip } from '../Redux/actions'

class CreateTrip extends Component {
  state = {
    location: localStorage.getItem("locationName"), 
    start_date: '',
    end_date: '',
    note: ''
  }

  changeHandler = (e) => {
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  locSelect = (e) => {
    console.log(e)
    this.setState({location: e.target.value})
  }

  submitHandler = (e) => {
    // e.preventDefault()

    let trip = {
      location_id: parseInt(localStorage.getItem('locationId')),
      user_id: 1,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      note: this.state.note
    }

    alert(`Your trip to ${this.state.location} has been successfully booked!`)

    this.props.addTrip(trip)
  }

  render() {
    return (
      <div class="card">
        <h2>Book a Trip</h2>
        <form>
          <div class="form-group">
            <label for="location">Destination</label>
            <input class="form-control" type="text" value={localStorage.getItem('locationName')} readonly ></input>
          </div>
          <div class="form-group">
            <label for="start_date">Start Date</label>
            <input required type="date" name="start_date" class="form-control" onChange={this.changeHandler}></input>
          </div>
          <div class="form-group">
            <label for="end_date">End Date</label> 
            <input required type="date" name="end_date"  class="form-control" onChange={this.changeHandler}></input>
          </div>
          <div class="form-group">
            <label for="note">Note</label>
            <textarea name="note" class="form-control" rows="3" onChange={this.changeHandler}></textarea>
          </div>
          <Button onClick={this.submitHandler} as={NavLink} to='/profile' >Book</Button>
        </form>
      </div>
    );
  }
}

function mdp(dispatch){
  return {addTrip: (trip) => dispatch(addTrip(trip))}
} 

function msp(state){
  return {locations: state.locations}
}

export default connect(msp, mdp)(CreateTrip);