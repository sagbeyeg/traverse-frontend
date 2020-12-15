import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginSignupEditUser extends Component {
  render() {
    return (
      <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 800}} className="card">
        {/* <Image src='/traverse-logo-white.png' height="150px"/> */}
          <Header as='h2' color='orange' textAlign='center'>Log in to Traverse</Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='orange' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <br></br>
          <small><h5><Link to="/forgotpassword">Forgot your password?</Link> | <Link to="/signup">Sign up for Exhale</Link></h5></small>
        </Grid.Column>
      </Grid>
      </>
    );
  }
}

export default LoginSignupEditUser;