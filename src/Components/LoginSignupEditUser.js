import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom'
import { Button, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { login } from '../Redux/actions'

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

  submitHandler = (e) => { 
    e.preventDefault()
    this.props.login(this.state.username)
    // alert(`Logging In...`)
  }

  render() {
    return (
      <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 900}} >
            <div class="card">
            <h2>Log in to Traverse</h2> 
            <br></br>
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

function mdp(dispatch){
  return {login: (username) => dispatch(login(username))} 
} 

// function msp(state){
//   return {locations: state.locations}
// }

export default connect(null, mdp)(LoginSignupEditUser);