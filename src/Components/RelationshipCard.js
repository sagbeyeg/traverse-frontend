import React, { Component } from 'react';
import { Card, Icon, Button, Grid, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'; 

class RelationshipCard extends Component {
  renderUser = (e) => {
    console.log(e.target.id)
    localStorage.setItem("userId", e.target.id)
  }

  render() {
    const {user} = this.props
    return (
      <Card class="relationship-cards">
        <Card.Content>
          {user.id == 3?
          <>
            <Image floated='left' circular size='mini' src="canary(hxh).jpg" />
            <Button class="follow-button" primary floated='right' onMouseEnter={(e) => e.target.textContent = "Unfollow" } onMouseLeave={(e) => e.target.textContent = "Following"}>Following</Button>
          </>
          :null}
          {user.id == 1?
            <Image floated='left' circular size='mini' src="profile-pic.jpg" />
          :null}
          {user.id != 1 && user.id != 3?  
          <>
          <Image floated='left' circular
          size='mini' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="/>
          <Button class="follow-button" primary floated='right' onMouseEnter={(e) => e.target.textContent = "Unfollow" } onMouseLeave={(e) => e.target.textContent = "Following"}>Following</Button>
          </>
          :null}
          <Card.Header id={user.id} onClick={this.renderUser} href={user.id == 1? "profile" : "user"} style={{cursor: 'pointer'}}>
            {user.name} 
          </Card.Header>
          <Card.Meta id={user.id} onClick={this.renderUser} href={user.id == 1? "profile" : "user"} style={{cursor: 'pointer'}}>
            @{user.username}{user.id == 3? <Button size="mini" basic color='blue' ><Icon name="handshake outline"/><em> Follows you </em></Button> : null}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          {user.bio.slice(0, 100)}...
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

export default RelationshipCard;