import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getLocationsFromApi } from '../Redux/actions'
import Location from '../Components/Location'
import {Card} from 'semantic-ui-react'

class LocationList extends Component {

  componentDidMount(){
    this.props.fetchLocations()
  }

  render() {
    const { locations } = this.props
    return (
      <div>
        <br></br> 
        <h1>Locations</h1>
        <br></br>
        <div>
          <Card.Group centered className="location-cards">
            { locations.map((loc, idx) => <Location loc={loc} key={idx}/>)}
          </Card.Group>
        </div>
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchLocations: () => dispatch(getLocationsFromApi())}
}

function msp(state){
  return {locations: state.locations}
}

export default connect(msp, mdp)(LocationList);