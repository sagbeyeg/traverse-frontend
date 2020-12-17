import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
class Review extends Component {

  render() {
    const { review } = this.props
    const star = "⭐"
    const empty_star = "☆"
    return (
      <Card >
        <Card.Content>
          <Card.Header><h2>{review.title}</h2></Card.Header>
          <Card.Meta>Ministry of Magic</Card.Meta>
          {star.repeat(review.rating)}{empty_star.repeat(5 - review.rating)}
          <Card.Description>
            <h5>{review.content}</h5>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Review;