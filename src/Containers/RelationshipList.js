import React, { Component } from 'react';
import { Grid, Segment, Header, Icon, Card } from 'semantic-ui-react'
import UserInfo from '../Components/UserInfo'
import UserCard from '../Components/UserCard'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

class RelationshipList extends Component {
  state = {
    relationship: "followers" 
  }

  clickHandler = (e) => {
    if (e.target.innerText == 'Followers') {
      this.setState ({ relationship: "followers"}, () => console.log("State changed to:", this.state.relationship))
    } else if (e.target.innerText == 'Following') {
      this.setState ({ relationship: "following"}, () => console.log("State changed to:", this.state.relationship))
    }
  }

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
                  <a class={this.state.relationship == 'followers'? "nav-link active" : "nav-link"} href="#" onClick={this.clickHandler}><Icon name='clipboard list' color='blue' />Followers</a>
                </li>
                <li class="nav-item">
                  <a class={this.state.relationship == 'following'? "nav-link active" : "nav-link"} href="#" onClick={this.clickHandler} ><Icon color='blue' name='home' />Following</a>
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
                  {this.state.relationship == "followers" ? 
                    user.followers? user.followers.map((user, idx) => <UserCard user={user} key={idx} id={user.id} /> ) : null 
                  :
                    user.following? user.following.map((user, idx) => <UserCard user={user} key={idx} id={user.id} /> ) : null
                  }
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

export default connect(msp)(RelationshipList);