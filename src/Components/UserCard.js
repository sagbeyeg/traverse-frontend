import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'; 

class UserCard extends Component {
  render() {
    const {user} = this.props
    return (
      <Card>
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>
            {user.username}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {user.bio}
          {/* <Button id={follower.id}>
            <Icon name='star outline' />
            Favorite
          </Button>
          <Button id={follower.id} name={follower.name} as={NavLink} to='/location' onClick={e => this.renderLocation(e.target.id, e.target.name)} >
            View
          </Button> */}
        </Card.Content>
      </Card>
    );
  }
}

export default UserCard;