import React, { Component } from 'react';
import { Grid, Segment, Header, Icon, Card } from 'semantic-ui-react'
import UserInfo from '../Components/UserInfo'
import RelationshipCard from '../Components/RelationshipCard'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

class RelationshipList extends Component {
  state = {
    relationship: localStorage.getItem("relationship")
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
              <Segment >
              <ul class="nav nav-tabs nav-fill">
                <li class="nav-item" >
                  <a class="nav-link" href="/profile" onClick={this.renderInfo}><Icon name='arrow left' color='blue' /></a>
                </li>
                <li class="nav-item" >
                  <a class={this.state.relationship == 'followers'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.clickHandler}>Followers</a>
                </li>
                <li class="nav-item">
                  <a class={this.state.relationship == 'following'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.clickHandler} >Following</a>
                </li>
                {/* <li class="nav-item">
                  <a class="nav-link" href="#" ><Icon color='blue' name='travel' />Suggestions</a>
                </li> */}
              </ul>
              <br></br>
              <div className="profile-cards">
                <br></br>
                <Card.Group centered>
                  {this.state.relationship == "followers" ? 
                    user.followers? user.followers.map((user, idx) => <RelationshipCard user={user} key={idx} id={user.id} type="followers" /> ) : null 
                  :
                    user.following? user.following.map((user, idx) => <RelationshipCard user={user} key={idx} id={user.id} type="following" /> ) : null
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