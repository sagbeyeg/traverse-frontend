import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react'

class Trip extends Component {
  render() {
    const { trip } = this.props
    return (
      <div>
      {trip?
        <Card >
          <Card.Content>
          <Card.Header></Card.Header>
          <Card.Meta>{trip.start_date.replace(/-/g, ".")} - {trip.end_date.replace(/-/g, ".")}</Card.Meta>
          <Card.Description>
            <p>{trip.note}</p>
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