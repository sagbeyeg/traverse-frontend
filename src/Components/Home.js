import React, { Component } from 'react';
import { Grid, Card, Button, Image } from "semantic-ui-react" 
import { NavLink } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 1500}} >
          <div class="home-card"> 
            <h1 style={{ fontSize: '100px' }}>Welcome to Traverse!</h1>
            <h1 style={{ fontSize: '80px' }}><em>The Most Trusted in Travel</em></h1>
          </div>
          <Card.Group itemsPerRow={3} centered style={{ fontSize: '200%' }}>
            <Card>
              <Card.Content>
                <Card.Header>"I Wish I Worked There"</Card.Header>
                <Card.Meta extra>-Our Competitors</Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>"I Wish I Booked my Trip with Them!"</Card.Header>
                <Card.Meta>-An Avid Traveler</Card.Meta>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>"The Easiest Way To Travel!"</Card.Header>
                <Card.Meta>-Person Obsessed with Ease</Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
          <br></br>
          <br></br>
          <Button size='huge' color='grey' as={NavLink} to="/locations">Browse Destinations</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;