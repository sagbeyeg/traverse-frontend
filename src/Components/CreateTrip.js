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
    note: '',
    confirmation: ""
  }

  componentDidMount = () => {
    this.setState({confirmation: "false"},() => console.log(this.state.confirmation))
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

    this.setState({confirmation: "false"},() => console.log(this.state.confirmation))
    // alert(`Your all inclusive trip 🛫 🚘 🏨 to ${this.state.location} has been successfully booked! Thank you for trusting Traverse!😃`)

    this.props.addTrip(trip)
  }

  setTrue = () => {
    this.setState({confirmation: "true"},() => console.log(this.state.confirmation))
  }

  render() {
    return (
      <div class="card">
        {this.state.confirmation == "true" ?
        <>
        <h2>Booking Confirmation</h2>
        <br></br>
        <h3><div>Thank you for booking your all inclusive trip with Traverse!</div> <div>Your confirmation will be sent to you via email shortly!</div></h3>
        <br></br>
        <Button onClick={this.submitHandler} as={NavLink} to='/profile' >Back to Profile</Button>
        </>
        :
        <>
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
          <Button onClick={this.setTrue}>Book</Button>
        </form>
        </>
      }
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