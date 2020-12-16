import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react'

class Trip extends Component {
  render() {
    const { trip } = this.props
    return (
      <div>
        <Card >
          <Card.Content>
          <Card.Header><h4>{trip.start_date.replace(/-/g, ".")} - {trip.end_date.replace(/-/g, ".")}</h4></Card.Header>
          <Card.Meta>Beauxbatons</Card.Meta>
          <Card.Description>
            <p>{trip.note}</p>
          </Card.Description>
        </Card.Content>
      </Card>
      </div>
    );
  }
}

export default Trip;