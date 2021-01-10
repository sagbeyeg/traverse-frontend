import React, { Component } from 'react';

class ReviewFilter extends Component {
  render() {
    return (
      <div className="filter">
        <h1>Looking For A Specific Destination?</h1>
     
        <select name="type" id="type" onChange={this.props.onChangeType}>
          <option name="all">All Reviews</option>
          <option name="myReviews">My Reviews</option>
        </select>     
      </div>
    );
  }
}

export default ReviewFilter;