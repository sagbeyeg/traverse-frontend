import React, { Component } from 'react'; 
import {Icon, Segment} from 'semantic-ui-react'
import Activity from '../Components/Activity'

class ActivityList extends Component {
  state = {
    show: "trips"
  }

  renderInfo = (e) => {
    if (e.target.innerText == "Trips") {
      this.setState({show: "trips"}, () => console.log("State changed to:", this.state.show))
    } else if (e.target.innerText == "Reviews"){
      this.setState({show: "reviews"}, () => console.log("State changed to:", this.state.show))
    }
  }
  render() {
    return (
      <div>
        <div class="activity">
        <h1>Activity</h1>
        <br></br>
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item" >
              <a class={this.state.show == 'reviews'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><Icon name='clipboard list' color='blue' />Reviews</a>
            </li>
            <li class="nav-item">
              <a class={this.state.show == 'trips'? "nav-link active" : "nav-link"} href="javascript:void(0)" onClick={this.renderInfo}><Icon color='blue' name='travel' />Trips</a>
            </li>
          </ul>
          <br></br>
          {this.state.show ==  "trips"? 
          <h1>Trips</h1>
          :null} 
          {this.state.show ==  "reviews"? 
          <h1>Reviews</h1>
          :null} 
        </div>
      </div>
    );
  }
}

export default ActivityList;