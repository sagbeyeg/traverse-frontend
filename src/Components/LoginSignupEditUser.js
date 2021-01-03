import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginSignupEditUser extends Component {
  state = {
    username: '',
    password: ''
  }

  changeHandler = (e) => { 
    this.setState({
      ...this.state, [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 800}} >
            <div class="card">
            <h1 class="blue">Log in to Traverse</h1> 
            <form>
              <div class="form-group">
                <label for="location">Username</label>
                <input class="form-control" type="text" name="username" value={this.state.username} onChange={this.changeHandler} ></input>
              </div>
              <div class="form-group">
                <label for="location">Password</label>
                <input class="form-control" type="password" name="password" value={this.state.password} onChange={this.changeHandler} ></input>
              </div>
              <Button primary onClick={this.submitHandler} as={NavLink} to='/profile' >Login</Button>
            </form>
              <br></br>
              <small><h5><Link to="/forgotpassword">Forgot your password?</Link> | <Link to="/signup">Sign up for Exhale</Link></h5></small>
          </div>
        </Grid.Column>
      </Grid>
      </>
    );
  }
}

export default LoginSignupEditUser;