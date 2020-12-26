import React, { Component } from 'react';
import { Grid, Segment, Header, Icon, Card } from 'semantic-ui-react'
import UserInfo from '../Components/UserInfo'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

class FollowerList extends Component {
  render() {
    const {user} = this.props
    return ( 
      <div >
        <br></br>
        <br></br>
        <Grid columns={2} divided centered >
          <Grid.Row stretched>
            <UserInfo />
            <Grid.Column >
              <Segment textAlign='center'>
              <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" >
                  <a class="nav-link active" href="/followers" ><Icon name='clipboard list' color='blue' />Followers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/following" ><Icon color='blue' name='home' />Following</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="#" ><Icon color='blue' name='travel' />Suggestions</a>
                </li> */}
              </ul>
              <br></br>
              <div className="profile-cards">
                <Header icon>
                  {/* <Icon color='blue' name='travel' /> */} Followers
                </Header>
                <Card.Group centered>
                  {/* {user.trips? user.trips.map((trip, idx) => <Trip trip={trip} key={idx}/> ) : null } */}
                </Card.Group>
              </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}


function msp(state){ 
  return {user: state.user}
}

export default connect(msp)(FollowerList);