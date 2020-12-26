import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu, Image, Dropdown, Button
} from "semantic-ui-react";

class Navbar extends Component {
  render() {
    // console.log(this.props.loggedIn)
    return (
      <Menu fixed='top' inverted>
        <Image src='/traverse-logo-white.png' height="50px" />
        <Dropdown text='Profile' pointing className='link item' item>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/profile" exact>My Profile</Dropdown.Item>
            <Dropdown.Item>Edit Profile</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item as={NavLink} to="/locations" exact>
          Destinations
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to="/login" exact>
            Login
          </Menu.Item>
        </Menu.Menu>
          
        {/* <Menu.Item as={NavLink} to="/logout" onClick={this.props.handleLogout}>
          Logout
        </Menu.Item> */}
        
      </Menu>
    )
  }
}

export default Navbar;