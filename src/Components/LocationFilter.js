import React, { Component } from 'react';
// import { Input } from 'semantic-ui-react'

class LocationFilter extends Component {
      
  createNameFilter = () => {
    return this.props.locations.map(loc => <option value={loc.name}>{loc.name}</option>)
  }

  render() {
    return (
      <div className="filter">
        <h3>Looking For A Specific Location?</h3>
     
        <select name="type" id="type" onChange={this.props.onChangeType}>
          <option value="All">All</option>
          {this.createNameFilter()}
        </select>

        {/* <Input placeholder="Search Locations..." onChange={}/> */}
        
      </div>
    );
  }
      
    
  
}

export default LocationFilter;