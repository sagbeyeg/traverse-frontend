import React, { Component } from 'react';
import { Segment, Image, Icon, Grid, Button } from 'semantic-ui-react'
import { MdLocationOn } from 'react-icons/md'  
import {connect} from 'react-redux'
import { getUserFromApi } from '../Redux/actions'

class UserInfo extends Component {

  componentDidMount(){
    //use dispatch to execute fetch call
    this.props.fetchUser(parseInt(localStorage.getItem("userId")))
  }

  setRelationship = (e) => {
    if (e.target.name == "following") {
      localStorage.setItem("relationship", "following")
      console.log(localStorage.getItem("relationship"))
    } else if (e.target.name == "followers") {
      localStorage.setItem("relationship", "followers")
      console.log(localStorage.getItem("relationship"))
    }
  }

  render() {
    const {user} = this.props
    return (
      <Grid.Column width='4'>
        <Segment >
          {user.id == 1?
            <>
              <Image fluid src="profile-pic.jpg"></Image>
              <br></br>
            </>
          :null}
          {user.id == 3?
            <>
              <Image fluid src="canary(hxh).jpg"></Image>
              <br></br> 
              <Button class="follow-button"  size="huge" primary floated='right' onMouseEnter={(e) => e.target.textContent = "Unfollow" } onMouseLeave={(e) => e.target.textContent = "Following"}>Following</Button>
            </>
          :
          null}
          
          
          <h2>{user.name}</h2>
          <em><h3>@{user.username} {user.id == 3? <Button basic color='blue' size="small" ><em><Icon name="handshake outline"/> Follows you</em></Button> : null}</h3></em>
          
          <br></br>
          <h4>
            {user.following? <a onClick={this.setRelationship} href="/relationships" name="following" class="card-link">{user.following.length} Following</a> : null} {user.followers? <a onClick={this.setRelationship} href="/relationships" name="followers" class="card-link">{user.followers.length} Follower(s)</a> : null} 
          </h4>
          <br></br>
          <h3> {user.bio} </h3>
          <br></br>
          <em>
            <h5>
              <MdLocationOn name="location arrow" size="1.5em"/> {user.state}, {user.country} <Icon  name='calendar' />Joined December 2020
            </h5>
          </em>
        </Segment>
      </Grid.Column>
    );
  }
}
function mdp(dispatch){
  return {fetchUser: (user) => dispatch(getUserFromApi(user))}
}

function msp(state){ 
  return {user: state.user}
}

export default connect(msp, mdp)(UserInfo);