import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Location extends Component {
  render() {
    const {loc} = this.props

    return (
      <Card >
        <Image src='https://media3.s-nbcnews.com/i/newscms/2019_22/2877036/190530-florida-beach-mc-1334_1bc1c3ed6737c023681383d5d719f1be.JPG' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{loc.name}</Card.Header>
          <Card.Meta>
            {loc.description}
          </Card.Meta>
          {/* <Card.Description>
          </Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <Button>
            <Icon name='star outline' />
            Add to Favorites
          </Button>
          {/* <Button>
            View Details
          </Button> */}
        </Card.Content>
      </Card>
    );
  }
}

export default Location;