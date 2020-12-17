import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Profile from '../Containers/Profile';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { addTrip } from '../Redux/actions'

class CreateTrip extends Component {
  clickHandler = () => {
    this.props.addTrip()
  }
  render() {
    return (
      <div class="card">
        <h2>Book a Trip</h2>
        <form>
          <div class="form-group">
            <label for="start_date">Start Date</label>
            <input type="date" class="form-control" id="exampleFormControlInput1"></input>
          </div>
          <div class="form-group">
            <label for="end_date">End Date</label> 
            <input type="date" class="form-control" id="exampleFormControlInput1"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Note</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <Button  onClick={this.clickHandler} as={NavLink} to='/profile'>Book</Button>
        </form>
      </div>
    );
  }
}
function mdp(dispatch){
  return {addTrip: () => dispatch(addTrip())}
} 

export default connect(null, mdp)(CreateTrip);