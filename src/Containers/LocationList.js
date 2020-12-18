import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getLocationsFromApi, setCurrentLocation } from '../Redux/actions'
import Location from '../Components/Location'
import {Card, Image, Button, Icon} from 'semantic-ui-react' 
import {NavLink} from 'react-router-dom'
import LocationFilter from '../Components/LocationFilter'

class LocationList extends Component {
  state = {
    filter: 'All'
  }

  componentDidMount(){
    this.props.fetchLocations()
  }

  renderLocation(id){
    console.log(id)
    localStorage.setItem('locationId', id);
    this.props.setLocation(id) 
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filter: value}, ()=>console.log(this.state.filter));
  };

  render() {
    const { locations } = this.props
    const images = ['https://media3.s-nbcnews.com/i/newscms/2019_22/2877036/190530-florida-beach-mc-1334_1bc1c3ed6737c023681383d5d719f1be.JPG',
      'https://media1.popsugar-assets.com/files/thumbor/Gbp5ZjfDuCDPFzlmvIMlSppdH74/887x0:3623x2736/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/05/14/239/n/40126596/2da006e05cdb994e042fe8.45308274_/i/Best-Travel-Destinations-Southeast-Asia.jpg',
      'https://media.giphy.com/media/lXC2gmHf2ypUs/giphy.gif'
    ]
    const filteredArray = locations.filter(loc => loc.name.includes(this.state.filter))
    return (
      <div>
        <br></br> 
        <h1>Locations</h1>
        <div className='filter-form'>
          <LocationFilter locations={this.props.locations} onChangeType={this.onChangeType} />
        </div>
        <br></br>
        <div>
          <Card.Group centered className="location-cards">
            { this.state.filter === 'All'?
            
              locations.map((loc, idx) => 
                <Card key={idx} id={loc.id} >
                  <Image src='https://media.giphy.com/media/37QOWrwGOljUCbdDxd/giphy.gif' />
                  <Card.Content>
                    <Card.Header>{loc.name}</Card.Header>
                    <Card.Meta>
                      {loc.description}
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Button id={loc.id}>
                      <Icon name='star outline' />
                      Favorite
                    </Button>
                    <Button id={loc.id} as={NavLink} to='/location' onClick={e => this.renderLocation(e.target.id)} >
                      View
                    </Button>
                  </Card.Content>
                </Card>
              )
            :
              filteredArray.map((loc, idx) => 
              <Card key={idx} id={loc.id} >
                <Image src='https://media.giphy.com/media/37QOWrwGOljUCbdDxd/giphy.gif' />
                <Card.Content>
                  <Card.Header>{loc.name}</Card.Header>
                  <Card.Meta>
                    {loc.description}
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button id={loc.id}>
                    <Icon name='star outline' />
                    Favorite
                  </Button>
                  <Button id={loc.id} as={NavLink} to='/location' onClick={e => this.renderLocation(e.target.id)} >
                    View
                  </Button>
                </Card.Content>
              </Card>
              )
            }
          </Card.Group>
        </div>
      </div>
    );
  }
}

function mdp(dispatch){
  return {fetchLocations: () => dispatch(getLocationsFromApi()), setLocation: (id) => dispatch(setCurrentLocation(id))}
}

function msp(state){
  return {locations: state.locations}
}

export default connect(msp, mdp)(LocationList);