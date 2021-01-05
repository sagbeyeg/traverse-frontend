import React, { Component } from 'react';
import {Card} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

class Trip extends Component {
  clickHandler = (e) => {
    console.log("clicked")
    localStorage.setItem('locationId', this.props.trip.location.id);
  }
  render() {
    const { trip } = this.props
    return (
      <div>
      {trip?
        <Card >
          <Card.Content>
          <Card.Header onClick={this.clickHandler} href="location" style={{cursor: 'pointer'}}>
              <em>{trip.location.name}</em>
          </Card.Header>
          <Card.Meta>{trip.start_date.replace(/-/g, ".")} - {trip.end_date.replace(/-/g, ".")}</Card.Meta>
          <Card.Description>
            <p><strong>Note:</strong> {trip.note == ""? "N/A" : trip.note}</p>
          </Card.Description>
        </Card.Content>
      </Card>
      :
      null
    }
      </div>
    );
  }
}

export default Trip;