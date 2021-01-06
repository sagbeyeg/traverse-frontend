import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react'

class Trip extends Component {
  clickHandler = (e) => {
    console.log("clicked")
    localStorage.setItem('locationId', this.props.trip.location.id);
    localStorage.setItem('locationName', this.props.trip.location.name);
  }
  render() {
    const { trip } = this.props
    const { user } = this.props
    return (
      <>
      {trip?
        <Card className="trip-cards">
          <Card.Content>
          <Card.Header>
            <h4>{trip.start_date.replace(/-/g, ".")} - {trip.end_date.replace(/-/g, ".")}</h4>
          </Card.Header>
          <Card.Meta>
              <h5><em>{trip.user.state}, {trip.user.country} <Icon name="right arrow" /> <a onClick={this.clickHandler} href="location" style={{cursor: 'pointer'}}>{trip.location.name}</a></em></h5>
          </Card.Meta>
          <Card.Description>
            <p>
              {trip.note}
            </p>
          </Card.Description>
        </Card.Content>
      </Card>
      :
      null
    }
      </>
    );
  }
}

export default Trip;